import { getFirestore, doc, getDoc, update, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged, } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();
const collectionRef = collection(db, "users");

let currentUser = "0000";

const userUpdated = new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user.uid;
            resolve(user.uid);
        } else {
            console.log("No user logged in");
        }
    });
});

export async function getPetInfo(setFunction) {
    await userUpdated;
    if (!currentUser) return;

    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const pet = docSnap.data().pet || {};
        setFunction(pet);
    } else {
        console.log("User doc not found");
    }
}

export async function updatePetInfo(attribute, value) {
    await userUpdated;
    if (!currentUser) return;

    try {
        await updateDoc(doc(collectionRef, currentUser), {
            [`pet.${attribute}`]: value
        });
    } catch (err) {
        console.error("Failed to update attribute:", err.message);
    }
}

export async function mapPetInfo(attribute, mapFunction) {
    await userUpdated;
    if (!currentUser) return;

    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const original = docSnap.data()?.pet?.[attribute];
        const updated = mapFunction(original);

        await updateDoc(docRef, {
            [`pet.${attribute}`]: updated
        });
        console.log(`pet.${attribute} updated`);
    }
}

export function levelToExp(level) {
    return 5 + level * 10;
}

export async function updateLevel(exp) {
    await userUpdated;
    if (!currentUser) return;

    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const cat = docSnap.data().pet;
        let level = cat.level || 0;
        let EXP = cat.EXP || 0;

        let totalExp = EXP + exp;

        while (totalExp >= levelToExp(level)) {
            totalExp -= levelToExp(level);
            level += 1;
        }

        try {
            await Promise.all([updatePetInfo("level", level),
            updatePetInfo("EXP", totalExp)
            ]);
            console.log("level updated");
        } catch (err) {
            console.log("update failed", err.message);
        }
    } else {
        console.log("User doc not found");
    }
}

export async function getPetStats() {
    await userUpdated;
    if (!currentUser) return { level: 0, EXP: 0 };

    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const cat = docSnap.data()?.pet || {};
        return {
            level: cat.level ?? 0,
            EXP: cat.EXP ?? 0
        };
    } else {
        return { level: 0, EXP: 0 };
    }
}
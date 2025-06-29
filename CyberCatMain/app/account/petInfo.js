import { getFirestore, doc, getDoc, update, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged, } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();
const collectionRef = collection(db, "users");

let currentUser = "0000";

export function getPetInfo(setFunction) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getDoc(doc(collectionRef, user.uid,)).then((doc) => {
                if (doc.exists()) {
                    currentUser = user.uid;
                    setFunction(doc.data().pet);
                } else {
                    console.log("User doc not found");
                }
            }).catch(console.log);
        } else {
            unsubscribe();
        }
    });
}

export function updatePetInfo(attribute, value) {
    return updateDoc(doc(collectionRef, currentUser), {
        [`pet.${attribute}`]: value
    }).then(() => console.log("Update attribute success")).catch(console.log);
}

export function mapPetInfo(attribute, mapFunction) {

    return getDoc(doc(collectionRef, currentUser))
        .then(
            (doc) => doc.data()[`pet.${attribute}`]).then((original) => {
                updateDoc(doc(collectionRef, currentUser),
                    {
                        [`pet.${attribute}`]: mapFunction(original)
                    })
                    .then(() => "Information Update Successful").catch(err => "Updated Failed because (of)" + err.message);
            });
}

export function levelToExp(level) {
    return 5 + level * 10;
}

export async function updateLevel(exp) {
    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const cat = docSnap.data().pet;

        let { level, EXP } = cat;
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
    const docRef = doc(collectionRef, currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const cat = docSnap.data().pet || {};
        return {
            level: cat.level ?? 1,
            EXP: cat.EXP ?? 0
        };
    } else {
        return { level: 1, EXP: 0 };
    }
}
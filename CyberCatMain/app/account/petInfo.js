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
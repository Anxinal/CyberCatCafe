import {addDoc, collection, doc, getDoc, getFirestore} from "firebase/firestore";

const db = getFirestore();
const collectionRef = collection(db, "ranking");


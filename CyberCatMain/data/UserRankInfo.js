import { app } from "../../firebaseConfig.js"
import { getFirestore, doc, getDoc, collection,setDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(app);
const collectionRef = collection(db, "ranking");
const auth = getAuth();

const Max_level = 4; // Maximum rank level a user can achieve
const Min_level = 0; // Minimum rank level a user can achieve

let currentUser = "0000"; // 0000 is the default user id that stores all default user information in the database

function initialiseUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user.uid;
            console.log("Current user set to: ", currentUser);
        } else {
            console.log("No user is signed in.");
        }
    });
}

initialiseUser();

function joinUserIntoRanking() {
    const userDocRef = doc(collectionRef, "allUsers",);
    return setDoc(userDocRef, {
        [currentUser]: {
            streak: 0,
            userRankLevel: 0,
            groupID: 0,
        }
    }, {merge: true}).then(() => {
        console.log("User added to ranking successfully");
    }).catch((error) => {
        console.error("Error adding user to ranking: ", error);
    });
}

function promoteUser(userId, userRankLevel) {
    const userDocRef = doc(collectionRef, "allUsers", userId);
    if (userRankLevel >= Max_level) {
        console.log("User is already at the maximum rank level.");
        return Promise.resolve();
    }
    return updateDoc(userDocRef, {
        userRankLevel: userRankLevel + 1
    }).then(() => {
        console.log("User promoted successfully");
    }).catch((error) => {
        console.error("Error promoting user: ", error);
    });
}

function demoteUser(userId, userRankLevel) {
    const userDocRef = doc(collectionRef, "allUsers", userId);
    if (userRankLevel <= Min_level) {
        console.log("User is already at the minimum rank level.");
        return Promise.resolve();
    }
    return updateDoc(userDocRef, {
        userRankLevel: userRankLevel - 1
    }).then(() => {
        console.log("User demoted successfully");
    }).catch((error) => {
        console.error("Error demoting user: ", error);
    });
}

function getAllCompetitors() {
    return null; // Placeholder for future implementation
}

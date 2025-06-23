import { app } from "../../firebaseConfig.js"
import { getFirestore, doc, getDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import {
  getAuth, onAuthStateChanged,
  signInWithEmailAndPassword, signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { UserInitInfo } from '../../constants/UserInitialInfo.js'
import { useRouter } from "expo-router";
import { displayError, displayNull, displayToast } from '../../components/ToastMessage.js'

const db = getFirestore(app);
const collectionRef = collection(db, "users");
const auth = getAuth();

// 0000 is the default user id that stores all default user information in the database
let currentUser = "0000";


const navigateToMain = (router) => { router.push('mainPages/UserCenter/screen'); };
const navigateToLogin = () => { useRouter().push("/") };


/* This function takes in an attribute of the user(such as username) and retrieve the data from the database
 It returns nothing and since the process is async, another set function is required for a temporary variable in the 
 app page(with useState) so that the page can be re-rendered after the information is retrieved 
*/
export function getUserInfo(attribute, setFunction) {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      getDoc(doc(collectionRef, user.uid)).then((doc) => {
        if (doc.exists()) {
          currentUser = user.uid;
          setFunction(doc.data()[attribute]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
        return error;
      });

    } else {
      // User is signed out
      unsubscribe();
    }
  });

}



/* This function takes in the user informations in the log in page and update the 
login status asynchronously.
It returns the promise chain to update login status itself which returns a string that represents the login status
use then() if the error message needs to be used.
 */
export function signInUser(email, password, router) {
  if (email == "" || password == "") return displayNull();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      displayToast("Login Success");
      navigateToMain(router);
    }).catch(displayError("Meow? Wrong password?"));

}

/* This function signs out the current user in the device and returns nothing
 */
export function signOutUser() {
  signOut(auth).then(() => { console.log("signed out successfully") })
    .catch(console.log);
}

/* This function takes in the user information in the register page and update the 
does not update the login status 

(TODO: Update the login page after registration) Done !

It returns the promise chain to update login status itself which returns a string that represents the login status
use then() if the error message needs to be used.
 */
export function registerNewUser(email, password, username) {
  console.log('Register query accepted.');
  if (email == "" || password == "" || username == "") return displayNull();
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // add some initial information to the user account
      await setDoc(doc(db, "users", userCredential.user.uid),
        UserInitInfo(username));
    }).then(navigateToLogin).catch(displayError("Register failed"));
}

/*
This function is used to update the user information in the back end 
Attribute: name of the attribute that changes (such as "username")
Value: The new value of the attribute 
If you want to reload the page remember that you should do it manually in your app page
For example use .then(setFunction) to trigger re-render
*/
export function updateUserInfo(attribute, value) {

  return updateDoc(doc(collectionRef, currentUser), {
    [attribute]: value
  }).then(() => console.log("Update attribute success")).catch(console.log);

}

export function mapUserInfo(attribute, mapFunction) {

  return getDoc(doc(collectionRef, currentUser))
    .then(
      (doc) => doc.data()[attribute]).then((original) => {
        updateDoc(doc(collectionRef, currentUser),
          {
            [attribute]: mapFunction(original)
          })
          .then(() => "Information Update Successful").catch(err => "Updated Failed because (of)" + err.message);
      });

}
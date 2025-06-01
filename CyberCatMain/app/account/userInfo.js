import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc, collection,setDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, 
         signInWithEmailAndPassword, signOut,
         createUserWithEmailAndPassword } from "firebase/auth";
const db = getFirestore(app);
const collectionRef = collection(db, "users");
const auth = getAuth();

// 0000 is the default user id that stores all default user information in the database
let currentUser = "0000";


const navigateToMain = (router) => {router.push('mainPages/userCenter');};

/* This function takes in an attribute of the user(such as username) and retrieve the data from the database
 It returns nothing and since the process is async, another set function is required for a temporary variable in the 
 app page(with useState) so that the page can be re-rendered after the information is retrieved 
 */
export function getUserInfo(attribute, setFunction){

  //Apply memoisation to the userdata obtained from firebase
  let cachedUserData = null;

  function requireUserdataFromFirebase(attribute, setFunction){
    onAuthStateChanged(auth, (user) => {
      if (user) {
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/auth.user
      currentUser = user;

      getDoc(doc(collectionRef, user.uid)).then( (doc) => {
        if (doc.exists()) {
          console.log("OK");
          cachedUserData = doc.data();
          setFunction(cachedUserData[attribute]);   
        }else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
        return error;
    });
  } else {
    // User is signed out
    currentUser = null;
    
  }
  });
  }

  onSnapshot(doc(collectionRef, currentUser.uid), (doc) => {
    cachedUserData = doc.data();
  });

  if(allUserdata == null) requireUserdataFromFirebase(attribute, setFunction);
  setFunction(cachedUserData[attribute]);
  
}



/* This function takes in the user informations in the log in page and update the 
login status asynchronously.
It returns the promise chain to update login status itself which returns a string that represents the login status
use then() if the error message needs to be used.
 */
export function signInUser(email, password, router){

  return signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            alert("login success" + userCredential.user.email);
            navigateToMain(router);
            return "";
         })
         .catch((error) => {
            return error.message;
         });
    
}
/* This function signs out the current user in the device and returns nothing
 */
export function signOutUser(){
  signOut(auth).then(() => {console.log("signed out successfully")})
               .catch(console.log);
}

/* This function takes in the user information in the register page and update the 
does not update the login status 

(TODO: Update the login page after registration)

It returns the promise chain to update login status itself which returns a string that represents the login status
use then() if the error message needs to be used.
 */
export function registerNewUser(email, password, username){  
      console.log('Register query accepted.');
      return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up 
        console.log(userCredential.user.email);
        // add some initial information to the user account
        await setDoc(doc(db, "users", userCredential.user.uid),
          {
            totalFocus: 0,
            username: username,
          });
        return "register success";
        }).catch((error) => {
          return error.message;
    }); 

}

export function updateUserInfo(attribute, value){
  updateDoc(doc(collectionRef, currentUser.uid), {
    [attribute] : value
  });

}
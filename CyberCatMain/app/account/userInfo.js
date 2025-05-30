import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc, collection,setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, 
         signInWithEmailAndPassword, signOut,
         createUserWithEmailAndPassword } from "firebase/auth";
const db = getFirestore(app);
const collectionRef = collection(db, "users");
const auth = getAuth();


export function getUserInfo(attribute, setFunction){
 
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
    getDoc(doc(collectionRef, user.uid)).then( (doc) => {
      if (doc.exists()) {
        console.log("OK");
        setFunction(doc.data()[attribute]);
      }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
        return error;
  });
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  
}

export function signInUser(email, password, router){
  console.log("login information");
  console.log(email);
  console.log(password);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("login success" + userCredential.user.email);
      router.push('mainPages/userCenter');
      return "";
    })
    .catch((error) => {
      return error.message;
    });
    
}

export function signOutUser(){
  signOut(auth).then(() => {console.log("signed out successfully")})
               .catch((err)=>{throw err;});
}


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
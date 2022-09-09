import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAFTheaji61oa0_VEapro89B5oQuYCpCNc",
    authDomain: "shop-tutorial-db-568d0.firebaseapp.com",
    projectId: "shop-tutorial-db-568d0",
    storageBucket: "shop-tutorial-db-568d0.appspot.com",
    messagingSenderId: "698415583800",
    appId: "1:698415583800:web:cca8e63dafa1cb5317cccd"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup= () => signInWithPopup(auth, provider);
  export const singInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
  export const db = getFirestore();

  export const creatUserDocumentFromAuth = async (userAuth, additionnalInformation = {}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const ceatedAt = new Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          ceatedAt,
          ...additionnalInformation,
        });
      }catch(error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email ||!password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email ||!password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
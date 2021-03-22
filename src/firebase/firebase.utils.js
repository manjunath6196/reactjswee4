import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/*
//Social-media Firebase
const config ={
  apiKey: "AIzaSyD4yHK0FVb0ktucT94oAW7vaApCahh_n6c",
  authDomain: "social-network-a5e45.firebaseapp.com",
  databaseURL: "https://social-network-a5e45-default-rtdb.firebaseio.com",
  projectId: "social-network-a5e45",
  storageBucket: "social-network-a5e45.appspot.com",
  messagingSenderId: "679687160976",
  appId: "1:679687160976:web:8af80f3782a2122aaec415",
  measurementId: "G-DJ56WNVQBK"
  };
*/

//Nail-shopping Firebase
const config ={
    apiKey: "AIzaSyDqAo1VfUwo7AWKBJK_zGkSnvS_WT0svdE",
    authDomain: "crwn-db-c4e4f.firebaseapp.com",
    projectId: "crwn-db-c4e4f",
    storageBucket: "crwn-db-c4e4f.appspot.com",
    messagingSenderId: "452126882503",
    appId: "1:452126882503:web:a577116fc21bdc89c6dce2",
    measurementId: "G-S4G4D4CS99"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);


export default firebase;

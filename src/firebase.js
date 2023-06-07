// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
//import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/firestore";
//import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOQIbr20p1C7rp9jg7ZvE-SpxROkCjYb8",
  authDomain: "qcm-registration2.firebaseapp.com",
  projectId: "qcm-registration2",
  storageBucket: "qcm-registration2.appspot.com",
  messagingSenderId: "260408327917",
  appId: "1:260408327917:web:4a660d6a7352ad599916e4",
  measurementId: "G-CDXVLW0QY5"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const {dob}    = additionalData;
      const { Name} = additionalData;
      const { school} = additionalData;
     const { place } = additionalData;
        const { std } = additionalData;
       const { phone } = additionalData;
        const { altphone } = additionalData;
  
      try {
        userRef.set({
          Name,
          school,
            std,
           phone,
         altphone,
          email,
          dob,
           place,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };

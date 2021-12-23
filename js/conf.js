import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, collection, getDoc, getDocs} from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyC2k_ds-MNuNoHBb6hATa5giMMz54nXg-g",
//     authDomain: "cortatuweb-5dd32.firebaseapp.com",
//     projectId: "cortatuweb-5dd32",
//     storageBucket: "cortatuweb-5dd32.appspot.com",
//     messagingSenderId: "598711012010",
//     appId: "1:598711012010:web:64b7ef19a9e225b1085ed3"
//   });

//   const auth = getAuth(firebaseApp);
// // delect auth state

// onAuthStateChanged(auth, user =>{
//     if(user != null){
//         alert('logged in');
//     }else{
//         alert('no user')
//     }
// });

const firebaseConfig = {
    apiKey: "AIzaSyC2k_ds-MNuNoHBb6hATa5giMMz54nXg-g",
    authDomain: "cortatuweb-5dd32.firebaseapp.com",
    projectId: "cortatuweb-5dd32",
    storageBucket: "cortatuweb-5dd32.appspot.com",
    messagingSenderId: "598711012010",
    appId: "1:598711012010:web:64b7ef19a9e225b1085ed3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
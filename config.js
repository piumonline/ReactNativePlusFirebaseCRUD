//import { firebase } from "@react-native-firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCrl4ZWk9Xy9HN8ypEgVwkY78OizLfaV84",
    authDomain: "foodshaav1.firebaseapp.com",
    projectId: "foodshaav1",
    storageBucket: "foodshaav1.appspot.com",
    messagingSenderId: "147355890666",
    appId: "1:147355890666:web:797c87e14b9befceed3893",
    measurementId: "G-79HSESC46X"
};

// Initialize Firebase


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


// Initialize Cloud Firestore and get a reference to the service
//export const db = getFirestore(app);
export {firebase};

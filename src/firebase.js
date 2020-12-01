// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgf1FwNZdwcQEPdem6gBSSBl98fbEaMVU",
  authDomain: "bijoy-bd.firebaseapp.com",
  databaseURL: "https://bijoy-bd.firebaseio.com",
  projectId: "bijoy-bd",
  storageBucket: "gs://bijoy-bd.appspot.com/",
  messagingSenderId: "577533326768",
  appId: "1:577533326768:web:c5477417d903924577d275",
};
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };

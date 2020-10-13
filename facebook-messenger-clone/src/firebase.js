  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXYU895MJXRBlv2R5srYU-YE5xHaROyeo",
    authDomain: "facebook-messenger-clone-4691f.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-4691f.firebaseio.com",
    projectId: "facebook-messenger-clone-4691f",
    storageBucket: "facebook-messenger-clone-4691f.appspot.com",
    messagingSenderId: "354814840520",
    appId: "1:354814840520:web:5da488dc9a51e7f4719ffd",
    measurementId: "G-DKRP8CKRTE"
});

const db = firebaseApp.firestore();

export default db;
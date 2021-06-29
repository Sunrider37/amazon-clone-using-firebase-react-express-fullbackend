import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyAaKJiXBHPfqjMf4Bu9c5yw1g0Slt-YJIc",
    authDomain: "clone-57342.firebaseapp.com",
    projectId: "clone-57342",
    storageBucket: "clone-57342.appspot.com",
    messagingSenderId: "514880168753",
    appId: "1:514880168753:web:b31edce0a2816e5c314610"};

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 
 export {db, auth }; 
//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCVqC9AKcgzNXE_m0YWdtPAtE5lBQC4T9k",
    authDomain: "comp1800-2024100-demo.firebaseapp.com",
    projectId: "comp1800-2024100-demo",
    storageBucket: "comp1800-2024100-demo.appspot.com",
    messagingSenderId: "297661348097",
    appId: "1:297661348097:web:794026daa0abd3b4278300"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

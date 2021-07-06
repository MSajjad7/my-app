import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1HXgLdivgAU_Tnzes0n-m67vqK9c_Vag",
  authDomain: "todo-app-3a77e.firebaseapp.com",
  projectId: "todo-app-3a77e",
  storageBucket: "todo-app-3a77e.appspot.com",
  messagingSenderId: "911459611866",
  appId: "1:911459611866:web:2408780a4e854ff2d261e3",
  measurementId: "G-XFX9S0F2HK",
});

const db = firebaseApp.firestore()

export default db;
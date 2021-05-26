import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmd4zFOnrqTVa9PKZfqmylWCiwNOCjM9k",
  authDomain: "whatsapp-mern-de006.firebaseapp.com",
  projectId: "whatsapp-mern-de006",
  storageBucket: "whatsapp-mern-de006.appspot.com",
  messagingSenderId: "296971547507",
  appId: "1:296971547507:web:02e7a2a0b9cea7d9e2cb06",
  measurementId: "G-MTXJ94G4FX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

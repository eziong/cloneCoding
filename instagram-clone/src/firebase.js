import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS9o1NxPdvxZOasWM91zdNiMmkzlvXk_Y",
  authDomain: "instagram-clone-react-7284e.firebaseapp.com",
  projectId: "instagram-clone-react-7284e",
  storageBucket: "instagram-clone-react-7284e.appspot.com",
  messagingSenderId: "1079828157326",
  appId: "1:1079828157326:web:36438cbbc6b38111d10adf",
  measurementId: "G-Y1YRGN5PX7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }
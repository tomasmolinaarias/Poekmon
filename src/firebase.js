import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4d2WQ0jcHNsib2VdyXe9jbdP0PU6FU-o",
  authDomain: "tareas-612d7.firebaseapp.com",
  databaseURL: "https://tareas-612d7-default-rtdb.firebaseio.com",
  projectId: "tareas-612d7",
  storageBucket: "tareas-612d7.appspot.com",
  messagingSenderId: "980026438449",
  appId: "1:980026438449:web:4679c4234bb7f7b8973610",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };

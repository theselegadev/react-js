// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYkUxKkJBZqvH2GhXENa-8xRb0pNVU4A",
  authDomain: "miniblog-230a3.firebaseapp.com",
  projectId: "miniblog-230a3",
  storageBucket: "miniblog-230a3.firebasestorage.app",
  messagingSenderId: "63213117632",
  appId: "1:63213117632:web:33ca48ab2dc855487a8d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
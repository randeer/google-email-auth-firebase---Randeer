// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbTVGqaP2o8iPhnnjTCNLUw38AjHm2pqw",
  authDomain: "torrent-app-8728b.firebaseapp.com",
  projectId: "torrent-app-8728b",
  storageBucket: "torrent-app-8728b.appspot.com",
  messagingSenderId: "299613757986",
  appId: "1:299613757986:web:f7d79e1a3f496b9928207b",
  measurementId: "G-0EGRR73ZPM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

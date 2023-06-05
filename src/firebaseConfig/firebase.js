// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd5ZTHo3bV9zbnJYby-D3eETaiDL-xScE",
  authDomain: "cinestar-3a3e2.firebaseapp.com",
  projectId: "cinestar-3a3e2",
  storageBucket: "cinestar-3a3e2.appspot.com",
  messagingSenderId: "97354594691",
  appId: "1:97354594691:web:ea7ac2a4fea12e7df4deb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




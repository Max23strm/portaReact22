// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgKNKKQziwh59tH0zFVXPvP9lvuZF_kH0",
    authDomain: "proyectosdemax-a397a.firebaseapp.com",
    projectId: "proyectosdemax-a397a",
    storageBucket: "proyectosdemax-a397a.appspot.com",
    messagingSenderId: "83204515268",
    appId: "1:83204515268:web:dbc1f5c704342a74da3091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app)

export default db
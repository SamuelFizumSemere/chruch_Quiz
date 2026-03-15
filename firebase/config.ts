import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAKJWogiCfaU3JiLxQ3J9yqlYDvwtvXAfc",

    authDomain: "bible-quiz-9f745.firebaseapp.com",

    projectId: "bible-quiz-9f745",

    storageBucket: "bible-quiz-9f745.firebasestorage.app",

    messagingSenderId: "619777469738",

    appId: "1:619777469738:web:046ade55cbfe9069d30253"

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
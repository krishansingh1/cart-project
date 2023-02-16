import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB705uvwt16iVigbhMpjITAeE9uqv1KupI",
    authDomain: "cart-project-26ce4.firebaseapp.com",
    projectId: "cart-project-26ce4",
    storageBucket: "cart-project-26ce4.appspot.com",
    messagingSenderId: "180238535414",
    appId: "1:180238535414:web:4f6fde3a19299b26e63ad7",
    measurementId: "G-7LJD9ECPV7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
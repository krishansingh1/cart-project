import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB705uvwt16iVigbhMpjITAeE9uqv1KupI",
  authDomain: "cart-project-26ce4.firebaseapp.com",
  projectId: "cart-project-26ce4",
  storageBucket: "cart-project-26ce4.appspot.com",
  messagingSenderId: "180238535414",
  appId: "1:180238535414:web:4f6fde3a19299b26e63ad7",
  measurementId: "G-7LJD9ECPV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

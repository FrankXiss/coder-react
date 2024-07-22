
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3ezK7cYaFdmTq-vVPRGjBgtXaXvkEjmI",
    authDomain: "ecommerce-991f0.firebaseapp.com",
    projectId: "ecommerce-991f0",
    storageBucket: "ecommerce-991f0.appspot.com",
    messagingSenderId: "485101811456",
    appId: "1:485101811456:web:b2a72982164f0b7a3025e5",
    measurementId: "G-ED497F4XD0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6wYSxsdSnHbzCTpPIz3I01IbKb8Cd04k",
    authDomain: "gallery-of-memories.firebaseapp.com",
    projectId: "gallery-of-memories",
    storageBucket: "gallery-of-memories.appspot.com",
    messagingSenderId: "117668417811",
    appId: "1:117668417811:web:0ccc9e9bda14cb67610ae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
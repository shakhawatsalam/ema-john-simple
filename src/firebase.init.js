// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX8FPWnIZkcUfuHR-JWncVSrrofgG93O8",
    authDomain: "ema-john-simple-f5222.firebaseapp.com",
    projectId: "ema-john-simple-f5222",
    storageBucket: "ema-john-simple-f5222.appspot.com",
    messagingSenderId: "276929810325",
    appId: "1:276929810325:web:37e3ddbef63f3c3d07b09c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
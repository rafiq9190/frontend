// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcnWWFUZ2uAqBnk_AzX5PWzxnexbhLuvo",
    authDomain: "next-auth-21201.firebaseapp.com",
    projectId: "next-auth-21201",
    storageBucket: "next-auth-21201.appspot.com",
    messagingSenderId: "381067185592",
    appId: "1:381067185592:web:a129819b4a133ea111134d",
    measurementId: "G-1G9117QNB4"
};

// Initialize Firebase
export default function initFirebase() {
    initializeApp(firebaseConfig)
}


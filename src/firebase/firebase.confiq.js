// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

//   apiKey: "AIzaSyBpexfF-CcE40mpaWtmRDwvnv4FRzV53Sc",
//   authDomain: "simple-firebase-practise-48e37.firebaseapp.com",
//   projectId: "simple-firebase-practise-48e37",
//   storageBucket: "simple-firebase-practise-48e37.appspot.com",
//   messagingSenderId: "657146933238",
//   appId: "1:657146933238:web:60d557b6cf59fa4156a1d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
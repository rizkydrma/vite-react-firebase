import { initializeApp } from "firebase/app";
console.log(process.env.REACT_APP_FIREBASE_APIKEY, "KEY");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-crud-react-3669d.firebaseapp.com",
  projectId: "auth-crud-react-3669d",
  storageBucket: "auth-crud-react-3669d.appspot.com",
  messagingSenderId: "175527634300",
  appId: "1:175527634300:web:f4739cec697b4ffdbc30f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

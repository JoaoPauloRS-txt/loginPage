
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8qTOlR2PF73_VRmKlS4tNWQ0mKgPNNJo",
  authDomain: "react-auth-a7290.firebaseapp.com",
  projectId: "react-auth-a7290",
  storageBucket: "react-auth-a7290.appspot.com",
  messagingSenderId: "1013975288408",
  appId: "1:1013975288408:web:41a69ff8eecb6318b4d82d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
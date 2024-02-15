import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCwiG8sRs0lh4OIxHknFDtSzry2FMMOwE0",
    authDomain: "chat-app-ffad6.firebaseapp.com",
    projectId: "chat-app-ffad6",
    storageBucket: "chat-app-ffad6.appspot.com",
    messagingSenderId: "320337808860",
    appId: "1:320337808860:web:2fb4c4374006b427045319",
    measurementId: "G-L41L3WZ9KG"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
  
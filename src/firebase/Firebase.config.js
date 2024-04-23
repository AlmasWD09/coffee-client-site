
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRjmi0nvwxFMlk1sDNzaANRuCzVGIwBOs",
  authDomain: "coffee-client-7c791.firebaseapp.com",
  projectId: "coffee-client-7c791",
  storageBucket: "coffee-client-7c791.appspot.com",
  messagingSenderId: "846222974442",
  appId: "1:846222974442:web:7de0f0835e8305af216693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

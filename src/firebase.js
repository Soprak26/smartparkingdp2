// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVTshE3BplRvTAhNyny5IyH0uwmBGZD7k",
  authDomain: "cpepark4304-ce1a1.firebaseapp.com",
  databaseURL: "https://cpepark4304-ce1a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cpepark4304-ce1a1",
  storageBucket: "cpepark4304-ce1a1.appspot.com",
  messagingSenderId: "838999687747",
  appId: "1:838999687747:web:5a7ec66b46098594750af6",
  measurementId: "G-33EW0X6CVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app 
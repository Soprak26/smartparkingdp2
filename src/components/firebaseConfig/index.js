import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


function StartFirebase() {
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
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlYzgPXxODv5tvf0QOv1l27NFnTZo11L8",
    authDomain: "my-react-e-commerce-2239c.firebaseapp.com",
    projectId: "my-react-e-commerce-2239c",
    storageBucket: "my-react-e-commerce-2239c.appspot.com",
    messagingSenderId: "1023720483887",
    appId: "1:1023720483887:web:aa25f231c0ccb9e9fceada",
    measurementId: "G-SPVSZGEQN8"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default firebaseConfig
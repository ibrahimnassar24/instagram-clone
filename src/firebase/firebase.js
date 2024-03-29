import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDOjwZH6EJs9WMYgZad-wcbw3lvKqdXD1U",
  authDomain: "instagram-clone-21805.firebaseapp.com",
  projectId: "instagram-clone-21805",
  storageBucket: "instagram-clone-21805.appspot.com",
  messagingSenderId: "236738603733",
  appId: "1:236738603733:web:03b4c144595762a7d3905c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

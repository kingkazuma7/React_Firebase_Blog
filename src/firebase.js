import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgJArewL57pf8zkSbhXfBTWI_7qQWf0cM",
  authDomain: "blog-with-react-and-fire-557af.firebaseapp.com",
  projectId: "blog-with-react-and-fire-557af",
  storageBucket: "blog-with-react-and-fire-557af.appspot.com",
  messagingSenderId: "356381087889",
  appId: "1:356381087889:web:bda260883996da3ca9c730"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }

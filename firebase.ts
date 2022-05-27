// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATyGmydHNXrPkzo2R43NsFqk0lL_DYP_Y",
  authDomain: "netflix-clone-redsync.firebaseapp.com",
  projectId: "netflix-clone-redsync",
  storageBucket: "netflix-clone-redsync.appspot.com",
  messagingSenderId: "704426985564",
  appId: "1:704426985564:web:89f998c4d1431ecda67e99",
};

// Initialize Firebase (if app is not initialized then initialize one, else get app)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export default app;
export { auth, db };

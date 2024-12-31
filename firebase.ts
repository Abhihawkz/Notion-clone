import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA3TaysZbsgeKr1HzGntnbM86EBSphbg2Y",
  authDomain: "notion-clone-e2334.firebaseapp.com",
  projectId: "notion-clone-e2334",
  storageBucket: "notion-clone-e2334.firebasestorage.app",
  messagingSenderId: "653450901292",
  appId: "1:653450901292:web:e3393e7a2d31de39d49e89"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()

export { db }
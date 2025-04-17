import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgLm0Sy_pD9RKEnYRXdwdRX_YwhdQcvEA",
  authDomain: "lms-platfrom-next-js.firebaseapp.com",
  projectId: "lms-platfrom-next-js",
  storageBucket: "lms-platfrom-next-js.firebasestorage.app",
  messagingSenderId: "802209612611",
  appId: "1:802209612611:web:a0afe77f4ae1afc6e825f6",
  measurementId: "G-E14FHCNL6Y",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
export const analytics = isSupported().then((yes) => {
  if (yes) {
    return getAnalytics(app);
  } else {
    return null;
  }
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storege = getStorage(app);

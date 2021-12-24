// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpEpaY0be1qcq2E06Ec3JOcGFatArBmJU",
  authDomain: "picgram-68f00.firebaseapp.com",
  projectId: "picgram-68f00",
  storageBucket: "picgram-68f00.appspot.com",
  messagingSenderId: "539254932303",
  appId: "1:539254932303:web:afd2d40041267a6599fb3a",
  measurementId: "G-R4BJKJ534E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)
const db =  getFirestore(app)
const auth = getAuth(app)

export {db, storage, auth}
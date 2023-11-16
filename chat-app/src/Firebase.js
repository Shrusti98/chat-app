// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// import {getFirestore} from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyB3JCFTCZHLGcrFtQFgpRJ0v03EpIngkkQ",
//   authDomain: "chatapp-28555.firebaseapp.com",
//   projectId: "chatapp-28555",
//   storageBucket: "chatapp-28555.appspot.com",
//   messagingSenderId: "294318047526",
//   appId: "1:294318047526:web:45da7608357dd8250e41e7"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db=getFirestore(app)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsPP5SuWGLSTtVayNihxPM1UdWhdpSNFo",
  authDomain: "chatroom-7c4cc.firebaseapp.com",
  projectId: "chatroom-7c4cc",
  storageBucket: "chatroom-7c4cc.appspot.com",
  messagingSenderId: "495805148306",
  appId: "1:495805148306:web:64679f4f70ef90cf014a4b",
  measurementId: "G-6Q2R6D4JMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db=getFirestore(app)

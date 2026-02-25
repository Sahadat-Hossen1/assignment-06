// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { exp } from "firebase/firestore/pipelines";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCnrjuHAQKuFint9G8xjILu61Dqs-IeOUA",
//   authDomain: "assignment-o6.firebaseapp.com",
//   projectId: "assignment-o6",
//   storageBucket: "assignment-o6.firebasestorage.app",
//   messagingSenderId: "128402174203",
//   appId: "1:128402174203:web:3cbd3c97673dfaa02cc05e",
//   measurementId: "G-QWCZBQZWW9"
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const auth=getAuth(app)
// export const db=getFirestore(app)
// export default auth ;
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_to77R0K0mp4ZnwksI_jGffxQIxPPNiA",
  authDomain: "assignments-06.firebaseapp.com",
  projectId: "assignments-06",
  storageBucket: "assignments-06.firebasestorage.app",
  messagingSenderId: "411192155673",
  appId: "1:411192155673:web:10907e826b5567407d9488",
  measurementId: "G-NWSDC6M816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export const db=getFirestore(app)
export default auth ;
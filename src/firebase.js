// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQixIQRzoDu7MG-SLK5fb4mh_8omIslsM",
  authDomain: "news-monkey-ee6a1.firebaseapp.com",
  projectId: "news-monkey-ee6a1",
  storageBucket: "news-monkey-ee6a1.appspot.com",
  messagingSenderId: "343176879268",
  appId: "1:343176879268:web:d67c18c7f74a9f6b87da31",
  measurementId: "G-K9B0PG14BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
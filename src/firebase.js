// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3W5nb21rGx4LtCTHlzy985jsGyQXFark",
  authDomain: "proyecto-u-camp.firebaseapp.com",
  projectId: "proyecto-u-camp",
  storageBucket: "proyecto-u-camp.appspot.com",
  messagingSenderId: "463001869796",
  appId: "1:463001869796:web:b48d8efaeca39c70ff7bf1",
  measurementId: "G-S87G11ZBWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
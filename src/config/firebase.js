// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFYbLZ4KTjtY3myRawYrpZx1K6Lcqvsw",
  authDomain: "a-rai-gor-dai.firebaseapp.com",
  projectId: "a-rai-gor-dai",
  storageBucket: "a-rai-gor-dai.appspot.com",
  messagingSenderId: "1048436488677",
  appId: "1:1048436488677:web:75c4d60ad3fc0150aed70c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default { firestore: app.firestore(), auth: app.auth(), storage: app.storage(), firebase };

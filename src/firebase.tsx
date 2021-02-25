import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCOaZ2QytKZOUvc9VLX1xDqsMMCiPTvl1E",
  authDomain: "react-auth-app-111.firebaseapp.com",
  projectId: "react-auth-app-111",
  storageBucket: "react-auth-app-111.appspot.com",
  messagingSenderId: "720751286579",
  appId: "1:720751286579:web:998c7f06bcd58d62038646",
};
const app = firebase.initializeApp(firebaseConfig);
export default app;

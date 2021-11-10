import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCFQnNTnsX6bVD7FqUv6YT4vbk37G2_XmQ",
  authDomain: "authentication-practice-8c7fd.firebaseapp.com",
  projectId: "authentication-practice-8c7fd",
  storageBucket: "authentication-practice-8c7fd.appspot.com",
  messagingSenderId: "105618301645",
  appId: "1:105618301645:web:332a5c6ee77f1463fa7f84",
});

export const authentication = app.auth();
export default app;

//  Connected to sampras acoount

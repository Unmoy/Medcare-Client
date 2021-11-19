import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDoPZw7TYLlb4bafj9E07VBXtGhKYWyfZ4",
  authDomain: "medcare-portal.firebaseapp.com",
  projectId: "medcare-portal",
  storageBucket: "medcare-portal.appspot.com",
  messagingSenderId: "901277649862",
  appId: "1:901277649862:web:2158f53bc5760cc8ff40c7",
});

export const authentication = app.auth();
export default app;

//  Connected to sampras acoount

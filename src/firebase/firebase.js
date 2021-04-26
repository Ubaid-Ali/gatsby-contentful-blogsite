import firebase from "firebase/app"
// import { auth } from "firebase/auth"

const config = {
  apiKey: "AIzaSyB7AtauBiBAZGTxX_cMjx2k6gaDEGw4K9g",
  authDomain: "gatsby-blog-auth.firebaseapp.com",
  projectId: "gatsby-blog-auth",
  storageBucket: "gatsby-blog-auth.appspot.com",
  messagingSenderId: "744468563164",
  appId: "1:744468563164:web:ef2308b0d6460841cba019",
  measurementId: "G-HJDGGN23ZC",
}

// initialize firebase
if (!firebase.app.length()) {
  firebase.initializeApp(config)
}

const firebaseAuth = firebase.auth

export { firebaseAuth }

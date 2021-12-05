import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGGIHO07ELdLwZDXYOKEHxpAF11yiSiSM",
    authDomain: "clone-73627.firebaseapp.com",
    projectId: "clone-73627",
    storageBucket: "clone-73627.appspot.com",
    messagingSenderId: "990839935081",
    appId: "1:990839935081:web:b0db987477d3a1a6f612f8",
    measurementId: "G-CJRYHPB1XP"
})

const auth = firebase.auth()

export { auth }
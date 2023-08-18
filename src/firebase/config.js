import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDH8wJ96YR_gf1jEGar655WIOajHUmplNg",
    authDomain: "ol-clone.firebaseapp.com",
    projectId: "ol-clone",
    storageBucket: "ol-clone.appspot.com",
    messagingSenderId: "1068926135781",
    appId: "1:1068926135781:web:ac2a513e4040dafa1d530c",
    measurementId: "G-X3KFCE75YJ"
};


export default firebase.initializeApp(firebaseConfig)
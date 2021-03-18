import firebase from "firebase/app";
import  "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC_FzJZuoa8px7mvKekUr5oAZK-zm13nM8",
    authDomain: "proyect1-zineb.firebaseapp.com",
    projectId: "proyect1-zineb",
    storageBucket: "proyect1-zineb.appspot.com",
    messagingSenderId: "971829042401",
    appId: "1:971829042401:web:ac5d136618d6039fc1eba0"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
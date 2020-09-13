import * as firebase from 'firebase';
import "firebase/database";

const config = {
    apiKey: "AIzaSyDmch3gPkq_GU_-r8klhgWw9ZnIH9-gmp8",
    authDomain: "recycling-b1a1f.firebaseapp.com",
    databaseURL: "https://recycling-b1a1f.firebaseio.com",
    projectId: "recycling-b1a1f",
    storageBucket: "recycling-b1a1f.appspot.com",
    messagingSenderId: "97462644161",
    appId: "1:97462644161:web:af7e3c2f0f1cf38f345340",
    measurementId: "G-5B58K8HVXM"
};

firebase.initializeApp(config);

export default firebase;
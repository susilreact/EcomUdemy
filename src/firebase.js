import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDz_XOt6SQaaQXbku9pCtjq76ZbXlIiixM',
    authDomain: 'ecommerce-4d66b.firebaseapp.com',
    projectId: 'ecommerce-4d66b',
    storageBucket: 'ecommerce-4d66b.appspot.com',
    messagingSenderId: '30017082826',
    appId: '1:30017082826:web:861f2fae536e2f37732b33',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

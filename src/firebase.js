import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVgxYGpXQz-f26MfqwrV5hFGr0GGjFd7E",
    authDomain: "airbnb-clone-b5ee1.firebaseapp.com",
    databaseURL: "https://airbnb-clone-b5ee1.firebaseio.com",
    projectId: "airbnb-clone-b5ee1",
    storageBucket: "airbnb-clone-b5ee1.appspot.com",
    messagingSenderId: "658405599002",
    appId: "1:658405599002:web:add3d50b178dbafe596ea3",
    measurementId: "G-F4V9MCENX5"
};    

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

//for google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
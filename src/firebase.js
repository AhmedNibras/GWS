import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARwW01YjceKlwt3kfY5957GPHrpwG1SqM",
    authDomain: "game-web-1c62d.firebaseapp.com",
    projectId: "game-web-1c62d",
    storageBucket: "game-web-1c62d.appspot.com",
    messagingSenderId: "833311704130",
    appId: "1:833311704130:web:25c60b340bbb60b55559db",
    measurementId: "G-91HJBL7ZBC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
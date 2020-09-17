var firebase = require('firebase')

exports.loadConfiguration = ()=>{
  console.log("ENTRA EN EL LOADCONFIGURATION");
var firebaseConfig = {
    apiKey: "AIzaSyAIxj1z23tk_wyxBTSvgjGGs48hnCb6mYg",
    authDomain: "shrimpfarms-9a4d9.firebaseapp.com",
    databaseURL: "https://shrimpfarms-9a4d9.firebaseio.com",
    projectId: "shrimpfarms-9a4d9",
    storageBucket: "shrimpfarms-9a4d9.appspot.com",
    messagingSenderId: "397928447655",
    appId: "1:397928447655:web:0faa1c0d9de45dfbe2e582",
    measurementId: "G-8FB06B3PRD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("Paso la configuracion", firebase);
  global.isConfigurated = true;
  global.firestoreDb = firebase.firestore();
  console.log("Paso la configuracion de base ", global.firestoreDb);
}

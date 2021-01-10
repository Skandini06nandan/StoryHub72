import firebase from 'firebase'
require ("@firebase/firestore")
// Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCcWGy3sPNrLha3kvPpfXUpK80hLqhtUQY",
    authDomain: "story-hub-562d4.firebaseapp.com",
    projectId: "story-hub-562d4",
    storageBucket: "story-hub-562d4.appspot.com",
    messagingSenderId: "577887427232",
    appId: "1:577887427232:web:2460357cf66cee1bad47c5"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
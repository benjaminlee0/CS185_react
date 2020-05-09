import Firebase from "firebase";
 
 const config = {
    apiKey: "AIzaSyDkFpmlMtJVSceEXs5e2dNhk_9Nb2gsHek",
    authDomain: "cs185-30958.firebaseapp.com",
    databaseURL: "https://cs185-30958.firebaseio.com",
    projectId: "cs185-30958",
    storageBucket: "cs185-30958.appspot.com",
    messagingSenderId: "604207439343",
    appId: "1:604207439343:web:bf834656a57587ed30aa1a",
    measurementId: "G-YCM246DXCW"
  };

const app = Firebase.initializeApp(config);
export const db = app.firestore();
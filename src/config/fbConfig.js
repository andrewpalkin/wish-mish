import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyD5dQg2iNEYdvKOqTK02uWq0qzqNbNOR9U",
  authDomain: "wish-mish-project-17062.firebaseapp.com",
  databaseURL: "https://wish-mish-project-17062.firebaseio.com",
  projectId: "wish-mish-project-17062",
  storageBucket: "wish-mish-project-17062.appspot.com",
  messagingSenderId: "1062794084702"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

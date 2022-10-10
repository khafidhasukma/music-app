import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVZiC05IuwfOUPjWUXOFZI38Fqws1mSW4",
  authDomain: "music-3d6d6.firebaseapp.com",
  projectId: "music-3d6d6",
  storageBucket: "music-3d6d6.appspot.com",
  messagingSenderId: "197222715458",
  appId: "1:197222715458:web:420cfb9e2ce0c55fbd5ddb",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  userCollection,
  songsCollection,
  commentsCollection,
  storage,
};

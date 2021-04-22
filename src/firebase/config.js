import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrJAqVPylbyFUlYKiIyG1YGJ1fZViV3Tg",
  authDomain: "photo-g-e4c3f.firebaseapp.com",
  databaseURL: "https://photo-g-e4c3f.firebaseio.com",
  projectId: "photo-g-e4c3f",
  storageBucket: "photo-g-e4c3f.appspot.com",
  messagingSenderId: "951036543756",
  appId: "1:951036543756:web:781867c91795cd15367f29",
  measurementId: "G-3Z71YEY69D"
};
  
// var firebaseConfig = {
//   apiKey: "AIzaSyBcPiUjJjG8aR8oTlUFUGcXOEe26O1UPcE",
//   authDomain: "photogallery-ffd2c.firebaseapp.com",
//   databaseURL: "https://photogallery-ffd2c-default-rtdb.firebaseio.com",
//   projectId: "photogallery-ffd2c",
//   storageBucket: "photogallery-ffd2c.appspot.com",
//   messagingSenderId: "159719441202",
//   appId: "1:159719441202:web:2960acccc03fdc04ff0d2b",
//   measurementId: "G-VLLC1EFYM4"
// };

  firebase.initializeApp(firebaseConfig);
  const photoStorage = firebase.storage();
  const fireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;// special type of data a timestamp data , firebase uses in its firestore

  export {photoStorage, fireStore, timestamp}
  
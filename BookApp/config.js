import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCt-dyUszdBdjRCHiLIE1wV1U-1Y7vuz2I",
    authDomain: "wireleibrary-d0650.firebaseapp.com",
    projectId: "wireleibrary-d0650",
    storageBucket: "wireleibrary-d0650.appspot.com",
    messagingSenderId: "265943452233",
    appId: "1:265943452233:web:25387059d91e5eb8230d98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
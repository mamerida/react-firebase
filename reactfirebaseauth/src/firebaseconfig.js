import firebase from 'firebase';
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDTROe75AJNghA9cAKwURaSOUoAXfnRYkw",
    authDomain: "react-test-60ee6.firebaseapp.com",
    projectId: "react-test-60ee6",
    storageBucket: "react-test-60ee6.appspot.com",
    messagingSenderId: "874672615912",
    appId: "1:874672615912:web:b92ec7d784e12bd52f345d",
    measurementId: "G-6HRP49MTFK"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  /* const fireAnalit = firebase.analytics(); */

  const auth = fire.auth()
  //esto para usar desde mi proyecto 
  export {auth}

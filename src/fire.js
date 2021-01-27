import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB-Kw9XYqVzLpOik20xk1tyz6eyeIykyCk",
    authDomain: "login-b007.firebaseapp.com",
    projectId: "login-b007",
    storageBucket: "login-b007.appspot.com",
    messagingSenderId: "596105045072",
    appId: "1:596105045072:web:81dea0d07c1bb52d925d55"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
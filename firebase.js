const firebaseConfig = {
  apiKey: "AIzaSyDZe_PzNHHNieqLkZN5t1B2l0e4Yn8z9-A",
  authDomain: "mvit-b135a.firebaseapp.com",
  projectId: "mvit-b135a",
  storageBucket: "mvit-b135a.appspot.com",
  messagingSenderId: "205089846697",
  appId: "1:205089846697:web:69e7e0035a8545f12dc0b8",
  measurementId: "G-ZNZ5VSPWB5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

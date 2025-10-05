// Firebase Configuration (Compat version for HTML)
const firebaseConfig = {
  apiKey: "AIzaSyAkcoM4ShPaSftc_maiQcBYBw1-DuVH7kk",
  authDomain: "mambohachimi-11446.firebaseapp.com",
  databaseURL: "https://mambohachimi-11446-default-rtdb.firebaseio.com",
  projectId: "mambohachimi-11446",
  storageBucket: "mambohachimi-11446.firebasestorage.app",
  messagingSenderId: "686795909003",
  appId: "1:686795909003:web:51483c901b5676aabe718e",
  measurementId: "G-2GWH4BF4FP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const database = firebase.database();
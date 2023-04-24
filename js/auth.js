// This is all taken from the Google Firebase configuration tutorial
// https://firebase.google.com/docs/auth/web/start


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "webtech-b8c61.firebaseapp.com",
  databaseURL: "https://webtech-b8c61-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webtech-b8c61",
  storageBucket: "webtech-b8c61.appspot.com",
  messagingSenderId: "188963219796",
  appId: "",
  measurementId: "G-955VV1RCCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);


// User Registration 
signUp.addEventListener('click',(e) => {

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var username = document.getElementById('username').value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
    const user = userCredential.user;

    set(ref(database, 'user/' + user.uid),{
        username: username,
        email: email
     })
// ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ DONT FORGET ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄   
     alert("user created: REMEMBER TO PUT THE FORWARD HERE");
// ^^^^^^^^^^^^^^^^^^^^^^ DONT FORGET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
// ..
});
})

login.addEventListener('click',(e) => {
var username = document.getElementById('email').value;
var password = document.getElementById('password').value;
//var username = document.getElementById('username').value;
signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt = new Date();
        update(ref(database, 'user/' + user.uid),{
            last_login: dt, 
        })

        alert("user logged in");
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);

});

})

onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
const uid = user.uid;
// ...
} else {
// User is signed out
// ...
}
});

logout.addEventListener('click', (e) => {
const auth = getAuth();
signOut(auth).then(() => {
    // Sign-out successful.
    alert('User successfully signed out')
}).catch((error) => {
    // An error happened.
    const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
});

})

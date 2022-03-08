// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

var login = document.getElementById('signin');

login.addEventListener('click',(e)=>{
 var email = document.getElementById('email').value;
 var password = document.getElementById('password1').value;
 localStorage.setItem("email", email);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      const dt = new Date();
       update(ref(database, 'users/' + user.uid),{
        last_login: dt,
      })
      alert('User logged In')

       location.replace("/index.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
});

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) { 
 
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  //bla bla bla
  // ...
} else {
  alert('User signed out');
  
  // User is signed out
  // ...
  //bla bla bla
}
});

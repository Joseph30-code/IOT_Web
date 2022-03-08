// Function to check Whether both passwords
      // is same or not.
      function checkPassword() {
        var password1 = document.getElementById("password1").value;
         var password2 = document.getElementById("password2").value;
         
        // If password not entered
        if (password1 == '')
                   alert ("Please enter Password");
                     
               // If confirm password not entered
               else if (password2 == '')
                   alert ("Please enter confirm password");
                     
               // If Not same return False.    
               else if (password1 != password2) {
                   alert ("\nPassword did not match: Please try again...")
                   return false;
               }
 
               // If same return True.
               else{
                   return true;
               }
     }
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, set, ref, update, child, get } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
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

 var sighUp = document.getElementById('signUp');
sighUp.addEventListener('click',(e) => {

 if(!checkPassword()){
         return false;
 }

 var email = document.getElementById('email').value;
 var password = document.getElementById('password1').value;
 var username = document.getElementById('username').value;


  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in 
     const user = userCredential.user;

     set(ref(database, 'users/' + user.uid),{
         username: username,
         email: email,
         pasword:password
     })



     alert('User created!');
     
     location.replace("/Login/login.html")

     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;

     alert(errorMessage);
   // ..
   });

});
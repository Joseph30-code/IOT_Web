var code;
var user_email;

function onScanSuccess(qrCodeMessage) {
  document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';
  code = qrCodeMessage;
}
function onScanError(errorMessage) {
//handle scan error
}
var html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();

user_email=localStorage.getItem("email");
var submit = document.getElementById('save');
submit.addEventListener('click',qrcode1);

function qrcode1(){
   
  localStorage.setItem("qrcode", code);
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
  if (user) { 
    const uid = user.uid;
    set(ref(database, 'Userslist/' + code),{
      qrcode:code,
      email:user_email,
      nodetemp:'34°C',
      motionstatus:'Status: LOW',
      gasstatus:'Status: LOW',
      soundsensor:'Status: LOW',
      IRsensor:'Status: LOW',
      soilsensor:'Normal',
      temphum:'23°C 15vH',
      rainsensor:'Status: HIGH',
      vibrationsensor:'Status: HIGH',
      Hallsensor:'46 F',
      ultrasonicsensor:'76 cm',
      ldrsensor:'Status: HIGH',
      touchsensor:'Status: HIGH',
      tiltsensor:'Status: HIGH'

  }).then(()=>{
    alert('Data Saved, Close the page and refresh your home page');
  })


  } else {
    alert('You didnt not register');
    
  }
  }); 

 
}






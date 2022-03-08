
//Your Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


var qrcodex;
qrcodex=document.getElementById('qr_value');
qrcodex.innerText=localStorage.getItem("qrcode");

var tempx,motionx,gasx,sound,irstate,soilx,temphumx,rainsenx,vibx,hallx,utsenx,ldrx,touchx,tiltx;
tempx=document.getElementById('nodetemp1');
motionx=document.getElementById('motiontemp');
gasx=document.getElementById('gasst');
sound=document.getElementById('soundx');
irstate=document.getElementById('IRstate');
soilx=document.getElementById('soilstate');
temphumx=document.getElementById('temphum');
rainsenx=document.getElementById('rainsen');
vibx=document.getElementById('vib');
hallx=document.getElementById('hall');
utsenx=document.getElementById('utsen');
ldrx=document.getElementById('ldr');
touchx=document.getElementById('touch');
tiltx=document.getElementById('tilt');


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
//References

let signoutlink= document.getElementById('logout');
let namech = document.getElementById('logv');

//Get the data

const dbref= ref(database);

get(child(dbref, 'Userslist/' + qrcodex.innerText)).then((snapshot)=>{
  if(snapshot.exists()){
    //Enter all your data here
    tempx.innerText = snapshot.val().nodetemp; 
    motionx.innerText = snapshot.val().motionstatus;
    gasx.innerText=snapshot.val().gasstatus;
    sound.innerText=snapshot.val().soundsensor;
    irstate.innerText=snapshot.val().IRsensor;
    soilx.innerText=snapshot.val().soilsensor;
    temphumx.innerText=snapshot.val().temphum;
    rainsenx.innerText=snapshot.val().rainsensor;
    vibx.innerText=snapshot.val().vibrationsensor;
    hallx.innerText=snapshot.val().Hallsensor;
    utsenx.innerText=snapshot.val().ultrasonicsensor;
    ldrx.innerText=snapshot.val().ldrsensor;
    touchx.innerText=snapshot.val().touchsensor;
    tiltx.innerText=snapshot.val().tiltsensor;
 
  }else{
   // alert("No data found");
  }
})
.catch((error)=>{

  alert('No data'+ error);

});




signoutlink.addEventListener('click',(e)=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    alert('user loged out');
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;

       alert(errorMessage);
  });

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) { 
  const uid = user.uid;
  namech.innerText='Logout'
  //bla bla bla
  // ...
} else {
  namech.innerText='Login' 
  // User is signed out
  // ...
  //bla bla bla
}
});

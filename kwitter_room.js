
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx10jn4M7iFJ3lgcVYGHnXxgyVCRSwe1Y",
  authDomain: "kwitter2-eca52.firebaseapp.com",
  databaseURL: "https://kwitter2-eca52-default-rtdb.firebaseio.com",
  projectId: "kwitter2-eca52",
  storageBucket: "kwitter2-eca52.appspot.com",
  messagingSenderId: "656147557411",
  appId: "1:656147557411:web:1870e7dd9908eb86f1d596",
  measurementId: "G-JWCWYYCE21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 var username= localStorage.getItem("user_name");
 document.getElementById("welcome_user").innerHTML= "Welcome "+ username + "!";
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
 row="<div class='room_name' id='"+Room_names+"' onclick='redirect_room_page(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function new_room(){
  var room=document.getElementById("room_name").value;
  localStorage.setItem("room_key", room);
  firebase.database().ref("/").child(room).update({
    message_key:"my message"
  });
  window.location="kwitter_page.html";
}

function logout(){
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_key");
}

function redirect_room_page(r_name){
console.log(r_name);
localStorage.setItem("room_key", r_name);
window.location="kwitter_page.html";
}

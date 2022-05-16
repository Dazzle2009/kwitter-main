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

var user_name= localStorage.getItem("user_name");

var room_name= localStorage.getItem("room_key");
document.getElementById("welcome_room").innerHTML="Welcome to the Room: "+ room_name;

function getData() 
{ 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot) { 
                    childKey  = childSnapshot.key;
                     childData = childSnapshot.val(); 
              if(childKey != "message_key") {
         firebase_message_id = childKey;
         message_data = childData;

         //Start code
console.log(firebase_message_id);
console.log(message_data);  
u_name=message_data['name'];
u_message=message_data['message'];
u_like=message_data['like'];  
name_with_tag="<h4>"+u_name+"<img src='tick.png' class='user_name'></h4>";                                                                                                                                                                                                    
//End code
    
} });  }); }
getData();

function send_message(){
      var msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}
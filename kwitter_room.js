var firebaseConfig = {
      apiKey: "AIzaSyAfGCCLWZ9BuvQviM4sOtsnM_VoufZ7MQQ",
      authDomain: "kwitter-c7562.firebaseapp.com",
      databaseURL: "https://kwitter-c7562-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7562",
      storageBucket: "kwitter-c7562.appspot.com",
      messagingSenderId: "290844243140",
      appId: "1:290844243140:web:95329c9b1ad9cc94470591"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome " +user_name +" ! "

    function addroom() {
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
     row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     });});}
      
getData();

function redirect(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
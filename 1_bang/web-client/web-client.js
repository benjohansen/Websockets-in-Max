// add CDN for socket.io and link to this file in index.html header


// Variables
const serverURL = "wss://YOUR-GLITCH-PROJECT-NAME.glitch.me";  // make sure you EDIT THIS!
                                                               // use http://localhost:3000
                                                               // if running server locally
// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on("connect", () => {            
     console.log("Connected to server!");
  });

socket.on("bang", () => {
    document.getElementById("recieveBang").style.background="green";
    setTimeout( () => document.getElementById("recieveBang").style.background="", 100);
});

// SEND

document.querySelector("#sendBang").onclick = () => {
    socket.emit("bang");
};
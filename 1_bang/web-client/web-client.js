// add CDN for socket.io and link to this file in index.html header


const serverURL = "wss://bony-superb-chronometer.glitch.me";
// use http://localhost:3000 if running server on your computer

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
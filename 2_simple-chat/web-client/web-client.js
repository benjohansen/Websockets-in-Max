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

socket.on("message", (message) => {
    const newLine = document.querySelector("#chatMessage");
    newLine.innerHTML += `${message}<br/>`;
});

// SEND

document.querySelector("#sendBangBtn").onclick = () => {
    socket.emit("bang");
};

document.querySelector("#sendBtn").onclick = () => {
    let textBox = document.querySelector("#inputBox"); // select the input box
    socket.emit("message", textBox.value );            // send typed text
    textBox.value = "";                                // clear the input box
};
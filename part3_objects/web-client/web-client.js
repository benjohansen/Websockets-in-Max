// add CDN for socket.io and link to this file in index.html header

// Variables
const serverURL = "wss://bony-superb-chronometer.glitch.me";
                // use http://localhost:3000 if running server on your computer
let socketID = "";
let randomR, randomG, randomB;

// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on("connect", () => {            
     console.log("Connected to server!");
     socketID = socket.id;  // unique random 20-character id is given to client from server
     randomR = Math.floor(Math.random()*256);   // generate random colors for this client
     randomG = Math.floor(Math.random()*256);
     randomB = Math.floor(Math.random()*256);
  });

socket.on("bang", () => {
    document.getElementById("recieveBang").style.background="green";
    setTimeout( () => document.getElementById("recieveBang").style.background="", 100);
});

socket.on("message", myJSobj => {
    const newLine = document.querySelector("#chatMessage");
    let logo = ``;
    if(myJSobj.fromMax){
        logo = ` <img src="cycling74.png" style="vertical-align:middle; height: 15px"> `
    } else {
        logo = ` <span style="width: 15px; height: 15px; margin:auto; display: inline-block; vertical-align: middle; background: rgb(${myJSobj.color[0]}, ${myJSobj.color[1]}, ${myJSobj.color[2]})"></span> `
    };
    newLine.innerHTML += `<span style="font-family: monospace">${myJSobj.id.substring(0,3)}</span>`
    newLine.innerHTML += logo;
    newLine.innerHTML += `${myJSobj.message}<br/>`;
});

// SEND

document.querySelector("#sendBangBtn").onclick = () => {
    socket.emit("bang");
};

document.querySelector("#sendBtn").onclick = () => {
    let textBox = document.querySelector("#inputBox");  // select the input box
    const newMessage =                                  // create an object to send
    {
        id: socketID,
        color: [randomR, randomG, randomB],        
        message: textBox.value,                         // get value from the input box
        fromMax: 0
    };
    socket.emit("message", newMessage );                // send the object to the server to send everyone
    inputBox.value = "";                                // clear the input box once the message is sent
};

// the enter key is only listened to if the cursor is in the input typing box
document.querySelector("#inputBox").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#sendBtn").click();
    };
});
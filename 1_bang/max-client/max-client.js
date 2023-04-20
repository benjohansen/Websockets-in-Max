const { io } = require("socket.io-client"); // for Max, use CommonJS import
const maxApi = require("max-api");          // for Max, use CommonJS import

// Variables
const serverURL = "wss://YOUR-GLITCH-PROJECT-NAME.glitch.me";  // make sure you EDIT THIS!
                                                               // use http://localhost:3000
                                                               // if running server locally
// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on("connect", () => {
    maxApi.post("Connected to server!");
 });

socket.on("bang", () => {
    maxApi.outletBang();
});


// SEND

maxApi.addHandler("bang", () => {
	socket.emit("bang");
});
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

socket.on("message", (message) => {
    maxApi.outlet("from-server", message);
});



// SEND

maxApi.addHandler(maxApi.MESSAGE_TYPES.BANG, async () => {
	await socket.emit("bang");
});

maxApi.addHandler("message", (message) => { // text from Max prepended with "message"
	socket.emit("message", message);        // send "message" event to the server
});
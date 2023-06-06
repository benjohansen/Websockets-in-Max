const { io } = require("socket.io-client"); // for Max, use CommonJS import
const maxApi = require("max-api");          // for Max, use CommonJS import

// Variables
const serverURL = "wss://objects-objects-objects.glitch.me";  // make sure you EDIT THIS!
                                                               // use http://localhost:3000
                                                               // if running server locally
let socketID = "";


// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on("connect", () => {
    maxApi.post("Connected to server!");
    socketID = socket.id;  // unique random 20-character socket id generated by server
    maxApi.outlet("max-socket-id", socketID); // send socket id out [node.script]
 });

socket.on("bang", () => {
    maxApi.outletBang();
});

socket.on("message", myJSobj => {                   
    maxApi.outlet("from-server", myJSobj);     // the maxApi will convert the js object into a dictionary
});

// SEND

maxApi.addHandler("bang", () => {
	socket.emit("bang");
});

// Getting and setting dicts is an asynchronous process and API function calls all return a Promise.
// We use the async/await syntax here in order to handle the async behaviour gracefully.
maxApi.addHandler(maxApi.MESSAGE_TYPES.DICT, async (myDict) => {
    await socket.emit("message", myDict ); // note: maxApi converts dictionaries to objects
});
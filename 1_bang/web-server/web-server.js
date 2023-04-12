import { createServer } from "http";                      
import { Server } from "socket.io";                 

// Create an HTTP server that listens to clients and gives responses back
const httpServer = createServer((req, res) => {    
    res.writeHead(200, {"Content-Type": "text/plain"}); // 200 = request successful
    res.write("The web server is up and running!");     // writes to the browser
    res.end();                                          // signals headers/body sent
});

// Create a socket.io server instance passing it httpServer and required options
const io = new Server(httpServer, {              
    cors: { origin: "*" }                 // wild card since security isn't a concern
});

// Event fired when client connects, giving each client a unique "socket" instance
io.on("connection", (socket) => {   
    console.log("a user connected");

    // RECIEVE 

    socket.on("bang", () => {
        socket.broadcast.emit("bang");   // send to all clients except the sender
    });
});

// Launch server
const myPort = process.env.PORT || 3000; // let Glitch choose port OR use 3000
httpServer.listen(myPort, () => {
    console.log(`the server is listening on port: ${myPort}`);
});
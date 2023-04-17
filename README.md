<p align="center">
	<img src="https://docs.cycling74.com/nodeformax/api/n4m-icon.png" width="200" height="200" alt="Node For Max">
    <img src="plus.png" width="83" height="200" alt="Socket.io">
    <img src="socketio.png" width="200" height="200" alt="Socket.io">
</p>

# Websockets in Max (Tutorials)

These example projects show how to use websockets (Socket.io) to send data back and forth between Max and a website over the internet (where the computer(s) running Max and device(s) access the website can be in different parts of the world). Each project builds upon the last. Check out the [***YouTube Tutorials***]().

## List of Projects

1. [Bang!](./part1_bang) ... [***YouTube Tutorial***]()
    - send bangs back and forth between a website and Max
2. [Simple Chat](./part2_simple-chat/) ... [***YouTube Tutorial***]()
    - send messages back and forth between a website and Max
3. [JS Objects! [dict]](./part3_objects/) ... [***YouTube Tutorial***]()
    - a more advanced chat
    - send objects (dictionaries) back and forth between a website and Max

# Installation

Download this entire repository.

Each project directory has the same file structure: `web-server`, `web-client`, and `max-client` directories with all the files you need.

## `web-server` Installation
---
> The web server simply listens for messages each connected client sends and is able to send them out to all connected clients (including Max).

Host these files somewhere that supports full stack apps (not just static sites) and allows for websockets (we'll use [Glitch.com](https://glitch.com)).

1. start a new blank Glitch project = https://glitch.new/blank
2. delete all the default files in Glitch (delete README.md, index.html, script.js, and style.css)
3. drag into the Glitch project all the files from the `web-server` folder (web-server.js, package.json, and package-lock.json)
4. Glitch will automatically install the correct packages for Socket.io as specified in `package.json`


## `web-client` Installation
---
> The web client enables users to send messages from the browser (from any device) to the web server.

Host these files on space you rent on a web server that allows for running static websites (we'll use [W3Schools Spaces](https://www.w3schools.com/spaces/), but other places you could host these files include Hostinger, Bluehost, SiteGround, etc.).

1. I put the app.js and index.html on isoundart.com and it works!
2. I can also open the index.html file (with app.js in same folder) on my local browser from my computer and it works!



## `max-client` Installation
---
> Max acts as just another client (just like the web client) able to send and receive messages to/from the web server.

Keep these files on the computer running [Max by Cycling '74](https://cycling74.com/products/max).

1. Open the `max-client.maxpat` file in Max.
2. click on the `script npm install` message within the Max patch to install the socket.io-client library dependencies found in the `package.json` file (this will create a `node_modules` folder) ... the next time you open this max patch, you do not need to click the `script npm install` message.
3. click on the `script start` message to run the JavaScript file held by [node.script]

Note: for the `JS Objects! [dict]` project = code within the JavaScript file using js objects - here's why =
- the max-api converts dictionaries sent into [node.script] to js objects
- Socket.io converts js objects behind the scenes to JSON when they are sent, then converts them back to objects when received
- the max-api converts js objects to dictionaries when sending js objects out [node.script]


# References
I could not have figured this out without nuggets from the following sources.
- Thanks to @garciadelcastillo in his [Hosting a WebSocket Server on Glitch](https://youtu.be/eLPhUFHKm0M) YouTube tutorial, I finally understood how to break free of the local network
- [WebSockets in 100 Seconds & Beyond with Socket.io](https://youtu.be/1BfCnjr_Vjg)
- [This YouTube video](https://youtu.be/fG4dkrlaZAA?t=311) clearly explains websockets
    - - the server knows who is connected to it at all times (establishing connections that persist)
- How Socket.io works = https://socket.io/get-started/chat#integrating-socketio


# LICENSE

[MIT](./LICENSE)

# Bug reports

Please report bugs with the petra package on the GitHub [issues](https://github.com/benjohansen/Websockets-in-Max/issues) tracker.
<p align="center">
	<img src="https://docs.cycling74.com/nodeformax/api/n4m-icon.png" width="200" height="200" alt="Node For Max">
</p>

# Websockets in Max (Tutorials)

These example projects show how to use websockets (Socket.io) to send data back and forth between Max and a website over the internet (where the computer(s) running Max and device(s) access the website can be in different parts of the world). Each project builds upon the last.

## List of Projects

1. [Bang!](./part1_bang) ... [***YouTube Tutorial***]()
    - send bangs back and forth between Max and a website
2. [Simple Chat](./part2_simple-chat/) ... [***YouTube Tutorial***]()
    - send messages back and forth between Max and a website
3. [JS Objects! [dict]](./part3_objects/) ... [***YouTube Tutorial***]()
    - a more advanced chat
    - send objects (dictionaries) back and forth between Max and a website

# Installation and File Structure

Each project has the following directories:


| Directory            | Explanation              |
| -------------------- | ------------------------ |
| web&#x2011;server/   | host these files somewhere that supports full stack hosting and allows for websockets (we'll use [Glitch.com](https://glitch.com)) |
| web&#x2011;client/   | host these files on a web server (we'll use [W3Schools Spaces](https://www.w3schools.com/spaces/)) |
| max&#x2011;client/   | keep these files on the computer running [Max by Cycling '74](https://cycling74.com/products/max)|


## `web-server` Installation

The web server takes messages from each client and is able to send them out to all connected clients. This web server cannot run on a hosting platform that only allows for static sites. The files in the `web-server` folder must be hosted somewhere that supports full stack apps and allows for websockets (we'll use [Glitch.com](https://glitch.com))

1. put the server files (index.js, package.json, and package-lock.json) on Github
2. imported files into Glitch (new project from import)
    - Glitch said I should specify version of Node


## `web-client` Installation
1. I put the app.js and index.html on isoundart.com and it works!
2. I can also open the index.html file (with app.js in same folder) on my local browser from my computer and it works!



## `max-client` Installation

1. only npm library required (only dependency):
    socket.io-client (not "socket.io")
2. make sure you do *not* install the "max-api" library via npm install max-api ... Max will give you the following: "Error: It appears that you installed the 'max-api' package from npm. This leads to undesired behaviour and errors. Please remove the package using 'npm uninstall max-api'."
- dictionaries in Max are nearly the same as JSON and JS objects which all deal key:value pairs ... I think it is safe to say dictionaries are JSON and can be viewed as JSON, but not all JSON files can be dictionaries ... here's what matters for this project:
    - dictionaries in Max? = keys cannot be repeated and must be in double quotes (not single) becauase they must be strings
        - when you send a dictionary into node.script, node.script will automatically convert it to js object (Max documentation says JSON)
    - JSON keys have to be in double quotes (not single) because they must be strings, are sequencial ordered and thus can be repeated
        - JSON is a standard - it exists as a string ... and must be parsed into an object for the key-value pairs to be referenced in code
    - JS object keys don't have to be in quotes (but can), can reference functions and can contain new functions

    the max-api converts dictionaries sent into [node.script] to js objects
Socket.io converts js objects behind the scenes to JSON when they are sent, then converts them back to objects when received
so, code all JS assuming js objects











## References
I could not have figured this out without nuggets from the following sources.
- Thanks to @garciadelcastillo in his [Hosting a WebSocket Server on Glitch](https://youtu.be/eLPhUFHKm0M) YouTube tutorial, I finally understood how to break free of the local network
- [WebSockets in 100 Seconds & Beyond with Socket.io](https://youtu.be/1BfCnjr_Vjg)
- [This YouTube video](https://youtu.be/fG4dkrlaZAA?t=311) clearly explains websockets
    - - the server knows who is connected to it at all times (establishing connections that persist)
- How Socket.io works = https://socket.io/get-started/chat#integrating-socketio


## LICENSE

[MIT](./LICENSE)

## Bug reports

Please report bugs with the petra package on the GitHub [issues](https://github.com/benjohansen/Websockets-in-Max/issues) tracker.
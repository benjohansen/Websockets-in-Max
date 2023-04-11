# How To Connect [Node for Max] ⇆ WEBSITE

the max-api converts dictionaries sent into [node.script] to js objects
js objects behind the scenes are converted to JSON when they are sent, then converted back to objects when received
so, code all JS assuming js objects


## web-server
this is a 
this doesn't have a database involved, so nothing is saved (all data is lost when someone disconnects)

1. put the server files (index.js, package.json, and package-lock.json) on Github
2. imported files into Glitch (new project from import)
    - Glitch said I should specify version of Node

## web-client
1. I put the app.js and index.html on isoundart.com and it works!
2. I can also open the index.html file (with app.js in same folder) on my local browser from my computer and it works!

## max-client
1. only npm library required (only dependency):
    socket.io-client (not "socket.io")
2. make sure you do *not* install the "max-api" library via npm install max-api ... Max will give you the following: "Error: It appears that you installed the 'max-api' package from npm. This leads to undesired behaviour and errors. Please remove the package using 'npm uninstall max-api'."
- dictionaries in Max are nearly the same as JSON and JS objects which all deal key:value pairs ... I think it is safe to say dictionaries are JSON and can be viewed as JSON, but not all JSON files can be dictionaries ... here's what matters for this project:
    - dictionaries in Max? = keys cannot be repeated and must be in double quotes (not single) becauase they must be strings
        - when you send a dictionary into node.script, node.script will automatically convert it to js object (Max documentation says JSON)
    - JSON keys have to be in double quotes (not single) because they must be strings, are sequencial ordered and thus can be repeated
        - JSON is a standard - it exists as a string ... and must be parsed into an object for the key-value pairs to be referenced in code
    - JS object keys don't have to be in quotes (but can), can reference functions and can contain new functions


## explaining how this works
- websockets = https://youtu.be/fG4dkrlaZAA?t=305 (establishing a connection that persists)
    - *not* request then response ... instead, websockets is full-dubplex (bi-directional) communication
    - the server knows who is connected to it at all times
- Template literals are literals delimited with backtick (`) characters
- how it works = https://socket.io/get-started/chat#integrating-socketio 



formatting a JSON = https://www.json.org/


implement = json sending = https://stackoverflow.com/questions/11805130/socket-io-how-to-send-javascript-object


# I got these file from = Basic Socket.io Demo
A bare minimum Socket.io implementation. Learn about [Websockets & Socket.io](https://youtu.be/1BfCnjr_Vjg) on Youtube. 

# I got how to connect all this to Glitch from
https://www.youtube.com/watch?v=eLPhUFHKm0M


# TO-DO
- come up with a good title for the youtube video and for the project on github and for the html document
- update this post with link to tutorial = https://cycling74.com/forums/website-max-send-data-webpage-max-device-anywhere
<p align="center">
    <img src="n4m-plus-socketio.png" width="75%" alt="node for max and socket.io">
</p>

# Websockets in Max (Tutorials)

These example projects show how to use websockets (Socket.io) to send data back and forth between Max and a website over the internet (computers running Max and devices accessing the website can be in different parts of the world). Each project builds upon the last.

Check out the [***YouTube Tutorial***](https://www.youtube.com/watch?v=Xj7eQqtiQew) !!!

## List of Projects

1. [Bang!](./part1_bang) ... [***YouTube Setup Video***](https://www.youtube.com/watch?v=Xj7eQqtiQew&t=338s)
    - send bangs back and forth between a website and Max
2. [Simple Chat](./part2_simple-chat/) ... [***YouTube Setup Video***](https://www.youtube.com/watch?v=Xj7eQqtiQew&t=375s)
    - send messages back and forth between a website and Max
3. [JS Objects! [dict]](./part3_objects/) ... [***YouTube Setup Video***](https://www.youtube.com/watch?v=Xj7eQqtiQew&t=411s)
    - a more advanced chat
    - send objects (dictionaries) back and forth between a website and Max

<p>&nbsp;</p>

# Installation

Setup instructions starts [here in the Youtube Video Tutorial](https://www.youtube.com/watch?v=Xj7eQqtiQew&t=338s).

<p>&nbsp;</p>

1. [Download this entire repository](https://github.com/benjohansen/Websockets-in-Max/archive/refs/heads/main.zip).

> Each project directory has the same directory structure (`web-server`, `web-client`, and `max-client`) with all the files you need for that individual project.

<p>&nbsp;</p>

## `web-server` Installation

> The web server simply listens for (receives) messages (named events containing data) each connected client sends and is able to send them out to all connected clients (including Max).

Host these files somewhere that supports full stack apps (not just static sites) and allows for websockets (we'll use a free option = [Glitch.com](https://glitch.com)).

2. start a new blank Glitch project = https://glitch.new/blank
3. delete all the default files (delete README.md, index.html, script.js, and style.css)
4. drag into the Glitch project all the files from the `web-server` folder (web-server.js, package.json, and package-lock.json)
5. Glitch will automatically install the correct packages for Socket.io as specified in `package.json`
6. note the title of the Glitch project
7. you are done with creating the web server!

<p>&nbsp;</p>

## `web-client` Installation

> The web client enables users to send messages from the browser (from any device) to the web server.

Host these files on space you rent on a web server that allows for running static websites (we'll use a free option = [W3Schools Spaces](https://www.w3schools.com/spaces/), but other places you could host these files include Hostinger, Bluehost, SiteGround, etc.).

8. create a "Basic" blank space = https://spaces.w3schools.com/createspace
9. delete all the default files in the W3Schools Space (index.html, README.md, script.js, and style.css)
10. upload (click "upload to root") all the files in the `web-client` folder (cycling74.png, index.html, and web-client.js)
11. edit the `web-client.js` file with the URL of your server running on Glitch.com
    ```javascript
    const serverURL = "wss://YOUR-GLITCH-PROJECT-NAME.glitch.me"; 
    ```
12. note the URL of the space by clicking on the "share" button in the top right of the preview view
13. you are done with the web client! ... move on installing the 

<p>&nbsp;</p>

## `max-client` Installation

> Max acts as just another client (just like the web client) able to send and receive messages to/from the web server.

Keep these files on the computer running [Max by Cycling '74](https://cycling74.com/products/max).

13. Open the `max-client.maxpat` file in Max.
14. double click on the [node.script] object so you can edit the `web-client.js` file with the URL of your server running on Glitch.com
    ```javascript
    const serverURL = "wss://YOUR-GLITCH-PROJECT-NAME.glitch.me"; 
    ```
15. click on the `script npm install` message within the Max patch to install the socket.io-client library dependencies found in the `package.json` file (this will create a `node_modules` folder) ... the next time you open this max patch, you do not need to click the `script npm install` message.
16. click on the `script start` message to run the JavaScript file held by [node.script]

<p align="center">:clap::clap::clap:</p>

Now you are ready navigate to the domain where you installed the `web-client` and send data to Max and get data from Max!

<p>&nbsp;</p>

# JavaScript Objects

I advice you to use js objects within your JavaScript files for the following reasons =
- within Max: the max-api converts dictionaries sent into [node.script] into js objects
- Socket.io converts js objects behind the scenes to JSON when they are sent, then converts them back to js objects when received
- within Max: the max-api converts js objects into dictionaries when sending js objects out [node.script]

<p>&nbsp;</p>

# References
I could not have figured this out without nuggets from the following sources.
- Thanks to @garciadelcastillo in his [Hosting a WebSocket Server on Glitch](https://youtu.be/eLPhUFHKm0M) YouTube tutorial, I finally understood how to break free of the local network
- [WebSockets in 100 Seconds & Beyond with Socket.io](https://youtu.be/1BfCnjr_Vjg)
- [This YouTube video](https://youtu.be/fG4dkrlaZAA?t=311) clearly explains websockets
- How Socket.io works = https://socket.io/get-started/chat#integrating-socketio
- [Node for Max Core Examples](https://github.com/Cycling74/n4m-core-examples)
- [More Node for Max Examples](https://github.com/Cycling74/n4m-examples)

<p>&nbsp;</p>

# LICENSE

[MIT](./LICENSE)

# Bug reports

Please report bugs on the GitHub [issues](https://github.com/benjohansen/Websockets-in-Max/issues) tracker.
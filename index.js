const http = require("http");
const WebSocket = require( "ws");
const express = require( "express");

const app = express();

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', message => {
        const json = JSON.parse(message);
        console.log(json);
        ws.send(`Server received message "${message}" from you and sent it back`);
    });

    ws.on("error", e => ws.send(e));

    console.log("Connection established with ip: ", ws._socket.remoteAddress);
    ws.send('Websocket connection established. You can send message now');
});

server.listen(5000, () => console.log("Server started at port 5000"))
Example of Nodejs express application with websocket

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][ci-image]][ci-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
const http = require("http");
const WebSocket = require( "ws");
const express = require( "express");

const app = express();

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });
```

## Start

  Download the repository

```bash
$ git clone https://github.com/kot-uz/nodejs-websocket.git
```

  Go to cloned folder:

```bash
$ cd nodejs-websocket
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  Check websocket connection throw Postman or Firecamp
  
 ```bash
$  ws://localhost:5000/
```
  You cand send message in JSON format
  
 ```bash
$  {"name":"me", "message": "Hello"}
```  
//Artigo utilizado: 
//TODO: https://www.npmjs.com/package/@rodrigogs/mysql-events
const WebSocket = require("ws");

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  ws.send("recebido!");
}

function onConnection(ws, req) {
  //ela recebe o websocket (a conexão cliente-servidor) e a request HTTP original.
  ws.on("message", (data) => onMessage(ws, data));

  ws.on("error", (error) => onError(ws, error));


//   setInterval(() => {
//     ws.send("cu!")
//   }, 3000);
  console.log("onConnection");
}

module.exports = (server) => {
  const wss = new WebSocket.Server({
    server,
  });

  wss.on("connection", onConnection);



  console.log("App Web Socket Server is running!");
  return wss;
};

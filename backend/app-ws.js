//Artigo utilizado: https://www.luiztools.com.br/post/como-criar-um-servidor-de-websockets-em-node-js/ (jeito tradicional, porém usei websocket com express)
//Jeito feito com express-ws: https://www.npmjs.com/package/express-ws
//Eventos listenning do MySQL: https://www.npmjs.com/package/@rodrigogs/mysql-events

const connection = require("./conn");

const MySQLEvents = require("@rodrigogs/mysql-events");

module.exports = (app) => {
  const expressWs = require("express-ws")(app);

  app.ws("/echo", (ws, req) => {
    ws.on("message", (msg) => {
      ws.send(msg);
    });

    const program = async () => {
      const instance = new MySQLEvents(connection, {
        startAtEnd: true,
        excludedSchemas: {
          mysql: true,
        },
      });

      await instance.start();

      instance.addTrigger({
        name: "DIR_PEDIDOS",
        expression: "marmitaria.tbPedido.*",
        statement: MySQLEvents.STATEMENTS.ALL,
        onEvent: (event) => {
          // You will receive the events here
          console.log(event);
          ws.send("Ação ocorrida no banco de dados!");
        },
      });

      instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
      instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
    };

    program()
      .then(() => console.log("Waiting for database events..."))
      .catch(console.error);
  });
};

// connection{
//   type: 'INSERT',
//   schema: 'marmitaria',
//   table: 'tbUsuario',
//   affectedRows: [ { after: [Object], before: undefined } ],
//   affectedColumns: [
//     'idUsuario',
//     'nomeUsuario',
//     'cpfUsuario',
//     'endUsuario',
//     'telUsuario'
//   ],
//   timestamp: 1673653953000,
//   nextPosition: 480,
//   binlogName: 'binlog.000062'
// }

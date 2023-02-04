//Artigo utilizado: https://www.luiztools.com.br/post/como-criar-um-servidor-de-websockets-em-node-js/ (jeito tradicional, porém usei websocket com express)
//Jeito feito com express-ws: https://www.npmjs.com/package/express-ws
//Eventos listenning do MySQL: https://www.npmjs.com/package/@rodrigogs/mysql-events

const { fetchAllPedidos } = require("./services/pedidos/usePedidos");
const connection = require("./conn");

const MySQLEvents = require("@rodrigogs/mysql-events");

module.exports = (app) => {
  const expressWs = require("express-ws")(app); //isso é importante viu!

  app.ws("/pedidos", (ws, req) => {
    ws.on("message", (msg) => {
      ws.send(msg);
    });

    console.log("Iniciou!");

    const program = async () => {
      const instance = new MySQLEvents(connection, {
        startAtEnd: true,
        excludedSchemas: {
          mysql: true,
        },
        serverId: Date.now(), //resolver erro
      });

      await instance.start();

      instance.addTrigger({
        name: "DIR_PEDIDOS",
        expression: "marmitaria.tbPedido.*",
        statement: MySQLEvents.STATEMENTS.ALL,
        onEvent: (event) => {
          // You will receive the events here
          // console.log(event);

          const cb = (error, results, fields) => {
            if (error) {
              ws.send();
            } else {
              ws.send(JSON.stringify(results));
            }
          };

          fetchAllPedidos(cb);

          // connection.query(
          //   {
          //     sql: "CALL sp_ShowPedidos();",
          //   },
          //   (error, results, fields) => {
          //     if (error) {
          //     } else {
          //       ws.send(JSON.stringify(results));
          //     }
          //   }
          // );
        },
      });

      instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, (err) =>
        console.log("Connection error", err)
      );
      instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, (err) =>
        console.log("ZongJi error", err)
      );
    };

    program()
      .then(() => console.log("Waiting for database events..."))
      .catch(console.error);
  });
};

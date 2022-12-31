const conn = require("../conn");

function insertPedido(pedido) {
  conn.query(
    {
      sql: "INSERT INTO tbPedido(idUsuario, idEntregador, descPedido, qtdeProteina) VALUE(?, ?, ?, ?)",
      values: [1, 1, pedido.desc, pedido.amountProtein],
    },
    (error, results, fields) => {
      if (error) console.log("Ops, ocorreu um erro: " + error);
      else return
    }
  );
}

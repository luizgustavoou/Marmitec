const conn = require("../../conn");

exports.updateStatusPedido = (id, newStatus, cb) => {
  conn.query(
    {
      sql: "UPDATE tbPedido SET statusPedido = ? WHERE idPedido = ?",
      values: [newStatus, id],
    },
    cb
  );
};

//TODO: Quando estiver finalizado o login no Vue, será setado ao invés de 1 e 1 os valores dinâmicos do usuario e entregador.
exports.insertPedido = ({ proteinas, acompanhamentos, feijao, desc }, cb) => {
  conn.query(
    {
      sql: "INSERT INTO tbPedido(idUsuario, idEntregador, descPedido, fraMilanesa, fraAssado, figaAce, bisSuiAce, fraMolho, arrozRefo, arrozLeite, macarrao, legSalte, salaCrua, macaCozida, feijao) VALUE(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        1,
        1,
        desc,
        proteinas.fra_milanesa,
        proteinas.fra_assado,
        proteinas.figa_ace,
        proteinas.bis_sui_ace,
        proteinas.fra_molho,
        acompanhamentos.arroz_refogado,
        acompanhamentos.arroz_leite,
        acompanhamentos.macarrao,
        acompanhamentos.leg_salteados,
        acompanhamentos.sala_crua,
        acompanhamentos.maca_cozida,
        feijao,
      ],
    },
    cb
  );
};

exports.fetchAllPedidos = (cb) => {
  conn.query(
    {
      sql: "CALL sp_ShowPedidos();",
    },
    cb
  );
};

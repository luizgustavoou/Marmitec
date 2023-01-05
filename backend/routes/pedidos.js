const express = require("express");
const cors = require("cors");
const conn = require("../conn");
const router = express.Router();

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

//INÍCIO CONFIGURAÇÃO

router.use(express.json());

//FIM CONFIGURAÇÃO

router.post("/", (req, res) => {
  // proteinas: {
  //   fra_milanesa: 0,
  //   fra_assado: 0,
  //   figa_ace: 0,
  //   bis_sui_ace: 0,
  //   fra_molho: 0,
  // },
  // feijao: 1,
  // acompanhamentos: {
  //   arroz_refogado: 0,
  //   arroz_leite: 0,
  //   macarrao: 0,
  //   leg_salteados: 0,
  //   sala_crua: 0,
  //   maca_cozida: 0,
  // },
  // desc: ""
  console.log(req.body);
  res.send();

  // conn.query(
  //   {
  //     sql: "INSERT INTO tbPedido(idUsuario, idEntregador, descPedido, qtdeProteina) VALUE(?, ?, ?, ?)",
  //     values: [1, 1, desc, amountProtein],
  //   },
  //   (error, results, fields) => {
  //     if (error) {
  //       res.statusCode = 500;
  //       res.send();
  //     } else res.send(results);
  //   }
  // );
});

module.exports = router;

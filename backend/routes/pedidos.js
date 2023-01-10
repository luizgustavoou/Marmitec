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
  const { proteinas, acompanhamentos, feijao, desc } = req.body;
  console.log(req.body);

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
    (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        res.send();
      } else res.send(results);
    }
  );
});

router.get("/", (req, res) => {
  conn.query(
    {
      sql: "SELECT * FROM tbPedido",
    },
    (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        res.send();
      } else res.send(results);
    }
  );
});

module.exports = router;

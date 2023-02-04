const {
  updateStatusPedido,
  fetchAllPedidos,
  insertPedido,
} = require("../services/pedidos/usePedidos");
const express = require("express");
const cors = require("cors");
const conn = require("../conn");
const router = express.Router();

const corsOptions = {
  origin: "*",
};

//INÍCIO CONFIGURAÇÃO

router.use(cors(corsOptions));
router.use(express.json());

//FIM CONFIGURAÇÃO

router.post("/", (req, res) => {
  const cb = (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      res.send();
    } else res.send(results);
  };

  insertPedido(req.body, cb);
});

router.get("/", (req, res) => {
  const cb = (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      res.send();
    } else {
      res.send(results);
    }
  };

  fetchAllPedidos(cb);
});

router.put("/status/:id", (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.newStatus;

  const cb = (error, results, fields) => {
    if (error) {
      res.statusCode = 500;
      res.send();
    } else res.send(results);
  };

  updateStatusPedido(id, newStatus, cb);
});

module.exports = router;

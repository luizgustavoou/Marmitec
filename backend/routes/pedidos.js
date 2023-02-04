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
  insertPedido(req.body, req, res);
});

router.get("/", (req, res) => {
  fetchAllPedidos(req, res);
});

router.put("/status/:id", (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.newStatus;

  updateStatusPedido(id, newStatus, req, res);
});

module.exports = router;

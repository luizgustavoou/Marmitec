const express = require("express");
const conn = require("../conn");
const router = express.Router();

//INÍCIO CONFIGURAÇÃO

router.use(express.json());

//FIM CONFIGURAÇÃO

router.post("/", (req, res) => {
  console.log(req.body);
  res.send();
});

module.exports = router;

const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "*",
};

//INÍCIO CONFIGURAÇÃO

router.use(cors(corsOptions));
router.use(express.json());

//FIM CONFIGURAÇÃO

router.post("/", (req, res) => {
  const token = {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogR3VzdGF2byIsImVtYWlsIjoibHVpemd1c3Rhdm9vdW1iZWxpbm9AZ21haWwuY29tIn0.tE3xVbbaG5ckNbzI6UGon68z19VRrvxqc5siLT9RLe8",
    refresh_token: "qualquer",
  };

  res.send(token);
});

module.exports = router;

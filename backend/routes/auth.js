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

router.post("/signup", async (req, res) => {
  try {
    const user = false;

    res.send(user);
  } catch (error) {
    res.send(400, error);
  }
});

router.post("/login", async (req, res) => {
  const { usernamec, password } = req.body;

  try {
    const user = false;

    if (!user) {
      return res.send(401);
    }

    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

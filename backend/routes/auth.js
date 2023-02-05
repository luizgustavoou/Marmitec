const {
  findUser,
  findAllUsers,
  findUserById,
  createUser,
  sign,
  verify,
} = require("../services/auth/useAuth");

const express = require("express");
const cors = require("cors");
const router = express.Router();

const crypto = require("crypto");

const corsOptions = {
  origin: "*",
};

//INÍCIO CONFIGURAÇÃO

router.use(cors(corsOptions));
router.use(express.json());

//FIM CONFIGURAÇÃO

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsInVzZXJuYW1lIjoibHVpemd1c3Rhdm9vIiwibm9tZVVzdWFyaW8iOiJMdWl6IEd1c3Rhdm8iLCJjcGZVc3VhcmlvIjoiOTk5OTk5OTk5OTkiLCJlbmRVc3VhcmlvIjoiUnVhIEFlcm9wb3J0byBkZSBOYXZlZ2FudGVzIDI0OSIsInRlbFVzdWFyaW8iOiIxMTExMTExMTExIiwiaWF0IjoxNjc1NjI2MjczLCJleHAiOjE2NzU3MTI2NzN9.0U07zlCFKZRldp9GQNjb5PMzrsEoR5vI5UPIQNjtByk

//erro

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjQwLCJ1c2VybmFtZSI6Imx1aXpndXN0YXZvbyIsIm5vbWVVc3VhcmlvIjoiTHVpeiBHdXN0YXZvIiwiY3BmVXN1YXJpbyI6Ijk5OTk5OTk5OTk5IiwiZW5kVXN1YXJpbyI6IlJ1YSBBZXJvcG9ydG8gZGUgTmF2ZWdhbnRlcyAyNDkiLCJ0ZWxVc3VhcmlvIjoiMTExMTExMTExMSIsImlhdCI6MTY3NTYyNjI3MywiZXhwIjoxNjc1NzEyNjczfQ.oVgUFc55tmQdDM9Jo0dZjLEENnt5EqUkAtzSeI4dKoU

//INÍCIO MIDDLEWARE
const authMiddleware = async (req, res, next) => {
  const [hashType, token] = req.headers.authorization.split(" ");

  const cb = (error, results, fields) => {
    return new Promise((resolve, reject) => {
      if (results.length <= 0) resolve(res.sendStatus(401));

      resolve();
    });
  };

  try {
    const payload = await verify(token);

    const user = await findUserById(payload.idUsuario, cb);

    req.auth = payload;

    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
//FIM MIDDLEWARE

router.post("/", (req, res) => {
  const token = {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogR3VzdGF2byIsImVtYWlsIjoibHVpemd1c3Rhdm9vdW1iZWxpbm9AZ21haWwuY29tIn0.tE3xVbbaG5ckNbzI6UGon68z19VRrvxqc5siLT9RLe8",
    refresh_token: "qualquer",
  };

  res.send(token);
});

//COMEÇO

router.post("/signup", async (req, res) => {
  const data = req.body;

  data.password = crypto.createHash("md5").update(data.password).digest("hex");

  const cb = (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      if (!results) {
        res.statusCode = 400;

        return res.send();
      }

      const { password, ...user } = data;

      const token = sign({ user });

      res.send({ token });
    }
  };

  createUser(data, cb);
});

router.get("/login", async (req, res) => {
  const [hashType, hash] = req.headers.authorization.split(" "); //basic hash

  const [username, password] = Buffer.from(hash, "base64")
    .toString()
    .split(":");

  const cb = (error, results, fields) => {
    if (results.length <= 0) {
      return res.sendStatus(401);
    }

    const { password, ...user } = results[0];
    const token = sign(user);

    res.send({ token });
  };

  findUser(username, password, cb);
});

router.get("/users", authMiddleware, (req, res) => {
  const cb = (error, results, fields) => {
    if (results.length <= 0) {
      return res.sendStatus(401);
    }

    res.send(results);
  };

  findAllUsers(cb);
});

router.get("/me", authMiddleware, (req, res) => {
  res.send(req.auth);
});

module.exports = router;

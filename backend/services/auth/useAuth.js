const jwt = require("jsonwebtoken");
const conn = require("../../conn");

const secret =
  "3A14D22CB3E05589F6A068A2A83CD92293BD9D8475E597E0CE85008B24871ED3";

exports.findUser = (username, password, cb) => {
  const query = conn.query(
    {
      sql: "SELECT * FROM tbUsuario WHERE username = ? and password = ?;",
      values: [username, password],
    },
    cb
  );
};

exports.findUserById = (id, cb) => {
   const query = conn.query(
    {
      sql: "SELECT * FROM tbUsuario WHERE idUsuario = ?;",
      values: [id],
    },
    cb
  );
};

exports.findAllUsers = (cb) => {
  const query = conn.query(
    {
      sql: "SELECT * FROM tbUsuario",
    },
    cb
  );
};

exports.createUser = (
  { username, password, nomeUsuario, cpfUsuario, endUsuario, telUsuario },
  cb
) => {
  const query = conn.query(
    {
      sql: "INSERT INTO tbUsuario(username, password, nomeUsuario, cpfUsuario, endUsuario, telUsuario) VALUE(?, ?, ?, ?, ?, ?);",
      values: [
        username,
        password,
        nomeUsuario,
        cpfUsuario,
        endUsuario,
        telUsuario,
      ],
    },
    cb
  );
};

exports.sign = (payload) => jwt.sign(payload, secret, { expiresIn: 86400 }); //token valido durante 24h

exports.verify = (token) => jwt.verify(token, secret);

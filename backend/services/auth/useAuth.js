const conn = require("../../conn");

exports.findUser = (username, password, cb) => {
  const query = conn.query(
    {
      sql: "SELECT * FROM tbUsuario WHERE username = ? and password = ?;",
      values: [username, password],
    },
    cb
  );
};

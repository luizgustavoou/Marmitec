import app from "./app";
import { Server } from "socket.io";
import emitterOrder from "./utils/emitterOrder";
import { config } from "dotenv";
import sequelize from "./config/db";

config();

(async () => {
  // await sequelize.sync({ force: true });
})();


const server = app.express.listen(3333);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Conectado!");

  emitterOrder.on("orderAction", (orders) => {
    socket.emit("orders", orders);
  });
});

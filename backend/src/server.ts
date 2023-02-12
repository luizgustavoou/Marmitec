import app from "./app";
import { Server } from "socket.io";
import emitterOrder from "./utils/emitterOrder";

const server = app.express.listen(3333);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Conectado!");

  socket.on("teste", (data) => {
    console.log("data");
  });

  emitterOrder.on("orderAction", (orders) => {
    // console.log(orders);
    
    socket.emit("orders", orders);
  });
});

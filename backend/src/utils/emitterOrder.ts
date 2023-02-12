import { EventEmitter } from "stream";

class EmitterOrder extends EventEmitter {}

const emitterOrder = new EmitterOrder();

export default emitterOrder;

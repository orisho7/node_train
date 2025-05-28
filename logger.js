const EventEmitter = require('events');
const uuid = require('uuid');
class Logger extends EventEmitter{
log(msg){
    this.emit('messege',{id: uuid.v4(),msg});
}

}
module.exports = Logger;

const Logger = require("./logger");
const logger = new Logger();
logger.on("messege", (data) => console.log("called Listen:", data));
logger.log("hello");
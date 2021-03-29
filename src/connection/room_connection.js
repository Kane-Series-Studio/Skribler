const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const newRoom = Schema({
    room_id: String,
    time : { type : Date, default: Date.now },
    isOpened: Boolean
})

var newRoomModule = mongoose.model("rooms", newRoom);

function createRoom(){
let r1 = Math.random().toString(36).substring(7);
let r2 = Math.random().toString(36).substring(7);
let r3 = Math.random().toString(36).substring(7);



var room_string = `${r1}-${r2}-${r3}`;
console.log("CREATED ROOM")
mongoose.connect("mongodb://localhost:27017/Skribler", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const room = new newRoomModule({
    room_id: room_string,
    isOpened: true
})

room.save();

}


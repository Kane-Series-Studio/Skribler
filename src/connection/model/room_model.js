const mongoose = require('mongoose');

const newRoom = mongoose.Schema({
    room_id: String,
    time : { type: Number, default: (new Date()).getTime() } 
})

module.exports = mongoose.model("rooms", newRoom);
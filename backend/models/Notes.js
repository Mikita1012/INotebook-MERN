const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const NoteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }, 
    tag: {
        type: String,
        default: "General"
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("note", NoteSchema);
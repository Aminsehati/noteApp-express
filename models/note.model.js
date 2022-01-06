const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    text: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    }
}, {
    timestamps: true,
})


module.exports = mongoose.model("Note", noteSchema)
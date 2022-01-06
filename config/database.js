const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://root:ddtvYhZj9bwmrdsU@noteapp.t10dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on("error", err => {
        console.log("err", err)
    })
    mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
    })
}
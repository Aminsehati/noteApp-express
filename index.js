const express = require('express');
const http = require('http');
const database = require("./config/database");
const routes = require('./routes');
const dotenv = require("dotenv");
const app = express();


dotenv.config();

////body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
////body
// connect to database
database();
// connect to database
////
routes(app);
////


const server = http.createServer(app);

server.listen(5000, () => {
    console.log('server running on port 5000');
})
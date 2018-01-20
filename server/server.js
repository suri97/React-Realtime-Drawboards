const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Body-Parser Middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cross Origin Resource Sharing
let cors = require('cors');
app.use(cors({credentials: true, origin: "*"}));

io.on('connection', (socket) => {
    console.log("Connected");
});

const port = 8080;
server.listen(port, function() {
   console.log("Server listening at port 8080");
});



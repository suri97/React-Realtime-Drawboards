const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

//Body-Parser Middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",function(req,res) {
    res.send("Hello Hi");
});

io.on("connection", (socket) => {
   console.log("Connected");
});

const port = 8080;
app.listen(port, function() {
   console.log("Server listening at port 8080");
});



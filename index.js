const express = require("express");
const server = express();
const cors = require("cors");
const socketIO = require("socket.io")
const h = require("http")
const http = h.createServer(server)
const io = socketIO(http);

server.use(cors());

num = 0

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on("connection", (socket) => {
    num++
    console.log(num)
    io.emit("num", num)

    socket.on("disconnect", () => {
        num--
        console.log(num)
        io.emit("num", num)
    })
})

http.listen(3000,() => console.log("running1"))
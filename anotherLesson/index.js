const express = require("express");
const { join } = require('node:path');
const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);  // connecting express to HTTP server so we can use all implentation of express under http ser
const io = socketio(server);


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});

// NOT WORKING 
// app.use("/", (req, res) => {
//     // index.html serving
//     res.sendFile(join(__dirname, '/public/index.html'));
// });

// Middleware to serve static files from the "public" directory
app.use(express.static(join(__dirname, './public')));

server.listen(3000, () => {
    console.log("Server started");
})
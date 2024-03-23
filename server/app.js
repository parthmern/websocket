import { Server } from "socket.io";
import express from 'express';
import {createServer} from "http";
import cors from "cors" ;

//const express = require("express");
const app = express();


app.use(cors({
    cors : {
        origin : "*",
        methods :["GET", "POST"],
        credentials : true,
    }
}))

app.get("/", (req, res)=>{
    res.send("sever working");
})

const server = createServer(app);
const io = new Server(server, {
    cors : {
        origin : "*",
        methods :["GET", "POST"],
        credentials : true,
    }
});


// io  means whole thing means all sockets
io.on("connection", (socket)=>{
    console.log("user connected with id", socket.id);
    socket.emit("emit", `data here with ${socket.id} - only for same original socket/client`);
    //socket.broadcast.emit("broadcast", `data here with ${socket.id} - not original only for others socket/client`);
    socket.on("disconnect", ()=>{
        console.log("user disconnected with id", socket.id);
    })


    // socket.on("msg", (data)=>{
    //     console.log("rcv data", data);
    //     io.emit("rcv-data", data);
    // })
    
    socket.on("secretmsg", ({room, data})=>{
        console.log(data);
        io.to(room).emit("roommsg", data);
    })


})


server.listen(4000, ()=>{
    console.log("server listen on 4000 port");
})
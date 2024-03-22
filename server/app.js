import { Server } from "socket.io";
import express from 'express';
import {createServer} from "http";

//const express = require("express");
const app = express();

app.listen(4000, ()=>{
    console.log("server listen on 4000 port");
})

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket)=>{
    console.log("user connected");
    console.log("id", socket.id);
})
const express = require("express");
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
require("./db/mongoConnect"); 
const {routesInit} = require("./routes/configRoutes");
const { log } = require("console");
const app = express();

app.use(cors());

routesInit(app)

const server = http.createServer(app);

const io = new Server(server ,{
  cors:{
    origin:"http://localhost:3000",
    methods: ["GET", "POST"],
  }
})

server.listen(3001,()=> {
console.log("server is running");
})
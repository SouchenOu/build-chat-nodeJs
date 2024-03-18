import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js"
import { Server } from "socket.io";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use("/api/messages",MessageRoutes);

const server = app.listen(process.env.PORT, ()=>{
});


const io = new Server(server, {
    cors: {
        origin : "http://locahost:3000"
    }
});

global.onlineUsers = new Map();
io.on("connection", (socket) =>{
    global.chatSocket = socket;
})
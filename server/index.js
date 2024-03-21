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



app.use("/uploads/images", express.static("uploads/images"));
app.use("/api/auth", AuthRoutes);
app.use("/api/messages",MessageRoutes);

const server = app.listen(process.env.PORT, ()=>{
});


/*****const io = new Server(server, { cors: { origin: "http://localhost:3000" }});

This line initializes a new WebSocket server (io) using the Server constructor. It's passing in a server object (server) and an options object. The options object specifies CORS (Cross-Origin Resource Sharing) configuration, allowing connections from the specified 
origin (http://localhost:3000). This means the WebSocket server will allow WebSocket connections from web clients hosted on http://localhost:3000. */

const io = new Server(server, {
    cors: {
        origin : "http://localhost:3000"
    }
});

/****io.on("connection", (socket) => { global.chatSocket = socket; })

This part sets up an event listener for when a new WebSocket connection is established (connection event). 
When a connection event occurs, the provided callback function is executed. Inside this callback, 
the socket object represents the newly established connection. The code then sets the global variable 
chatSocket to reference this newly connected socket. This allows other parts of the application to access 
this socket globally, presumably for handling chat-related functionality. */




/*****Overall, this code sets up a WebSocket server with CORS configuration, initializes a global variable to store online users, 
 * and assigns the connected socket to a global variable for further interaction within the application. */
global.onlineUsers = new Map();
io.on("connection", (socket) =>{
    global.chatSocket = socket;
    socket.on("add-user", (userId) =>{
        onlineUsers.set(userId, socket.id)
    });
    socket.on("send-message", (data)=>{
        console.log("data here-->", data);
        const sendUserSocket = onlineUsers.get(data.toId);
        console.log("online users-->", onlineUsers);
        console.log("sender here-->", sendUserSocket);
        if(sendUserSocket){
            socket.to(sendUserSocket).to(data.fromId).emit("message-receive", {
                fromId: data.fromId,
                message: data.content,
            })
        }
    
    })
    
     
});





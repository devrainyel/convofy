import { Server } from "socket.io";
import http from "http";
import { ENV } from "./env.js";
import express from "express";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
    origin: [ENV.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
    }
});

// apply authentication middleware to all coket connections
io.use(socketAuthMiddleware);

// this is for storig online users
const userSocketMap = {}; // {userId:socketId}

io.on("connection", (socket) => {
    console.log("User connected", socket.user.fullName)

    const userId = socket.userId
    userSocketMap[userId] = socket.io

    // is used to send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.user.fullName);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export {io, app, server};



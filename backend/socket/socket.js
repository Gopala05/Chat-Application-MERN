import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

export const getReceiverSocketID = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socket.id}

io.on("connection", (socket) => {
  // console.log(`A socket connected: ${socket.id}`);
  const userId = socket.handshake.query.userId;
  if (userId != undefined) userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to all the connected clients
  io.emit("getUsersOnline", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. It can be used in both client and server side
  socket.on("disconnect", () => {
    // console.log(`Socket disconnected: ${socket.id}`);
    delete userSocketMap[userId];
    io.emit("getUsersOnline", Object.keys(userSocketMap));
  });
});

export { app, server, io };

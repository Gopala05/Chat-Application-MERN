import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

import connection from "./db/connectTOMongoDB.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

//CORS
app.use(cors());

//Middleware
app.use(express.json()); //to parse the incomming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

server.listen(PORT, () => {
  connection();
  console.log(`Server running on port ${PORT}`);
});

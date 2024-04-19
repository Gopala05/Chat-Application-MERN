import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import connection from "./db/connectTOMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//Middleware
app.use(express.json()); //to parse the incomming requests with JSON payloads (from req.body)
app.use(cookieParser()); 

app.use("/api/auth", authRoute); 
app.use("/api/message", messageRoute); 

// app.get("/", (req, res) => {
//   res.send("OK GK");
// });

app.listen(PORT, () => {
  connection();
  console.log(`Server running on port ${PORT}`);
});

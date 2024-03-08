import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";
import connection from "./db/connectTOMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//Middleware
app.use(express.json());
app.use("/api/auth", authRoute);

// app.get("/", (req, res) => {
//   res.send("OK GK");
// });

app.listen(PORT, () => {
  connection(); 
  console.log(`Server running on port ${PORT}`);
});

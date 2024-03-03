import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js"
import connection from "./db/connectTOMongoDB.js";

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("OK GK")
});

app.use("/api/auth", authRoute)

app.listen(PORT, () => { connection(), console.log(`Server running on port ${PORT}`)})
import jwt from "jsonwebtoken";
import UserModal from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send({ error: "Unauthorized No token provided" });
    }

    const decode = jwt.verify(token, process.env.JWT); // Pass the secret key to decode

    if (!decode) {
      return res.status(401).send({ error: "Unauthorized No token provided" });
    }

    const user = await UserModal.findById(decode.userId).select("-password"); // userId used becuase we have defined as userId in generateToken.js

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    next(); // After the execution of this protectRoute function it calls next adjacent function i.e., Calls sendingMessage (in message.routes.js) afterthe execution of this function
  } catch (error) {
    console.log("Error in ProtectRoute Middleware: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;

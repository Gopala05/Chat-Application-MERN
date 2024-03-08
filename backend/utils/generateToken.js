import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //In Milli Seconds
    httpOnly: true, //To prevent Cross Site Scripting (XSS) Attacks
    sameSite: "strict", //To prevent Cross Site Request Forgery (CSRF) Attacks
    secure: process.env.MODE !== "development",
  });
};

export default generateToken;

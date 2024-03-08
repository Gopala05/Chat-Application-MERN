import UserModal from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

//Sign Up
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body; //Payload

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const userExist = await UserModal.findOne({ userName });

    if (userExist) {
      return res.status(400).json({ error: "User already Exist" });
    }

    //Hashing the Password
    const salt = await bcrypt.genSalt(10); //Salt Creation, more the numerical Value higher is the Encryption, but excecution speed reduces
    const hashedPassword = await bcrypt.hash(password, salt);

    //Random Profile Pic API
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new UserModal({
      fullName,
      username: userName, //Since the "username" in Modal is not Same as "userName"
      password: hashedPassword,
      gender,
      profileImage: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Token Generation
      generateToken(newUser._id, res);
      await newUser.save(); //Save User

      res.status(201).json({
        _id: newUser.id, //Mongo Creates ID by default
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profileImage,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Sign Up Error: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Log-In
export const login = (req, res) => {
  console.log("User Login");
};

//Log-Out
export const logout = (req, res) => {
  console.log("User Logout");
};

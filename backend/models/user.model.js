import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profileImage: {
    type: String,
    default: "",
  },
});

const UserModal = mongoose.model("User", userScheme);

export default UserModal;

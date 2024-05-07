import UserModal from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;

    //To Fetch All Users Including the User Logged IN

    // const allUsers = await UserModal.find().select("-password");

    //To Fetch All users Excluding the User Logged IN
    const allUsersExceptLoggedInUser = await UserModal.find({
      _id: { $ne: loggedInUserID },
    }).select("-password"); // To Remove the Password in the response

    res.status(200).json(allUsersExceptLoggedInUser);
  } catch (error) {
    console.log("Error in getting the Users: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

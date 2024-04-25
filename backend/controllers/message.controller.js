import ConversationModal from "../models/conversation.model.js";

export const sendingMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = ConversationModal.findOne({
      participants: { $all: [senderId, receiverId] },
    });
  } catch (error) {
    console.log("Error in Sending Message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

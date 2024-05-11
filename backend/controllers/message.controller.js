import ConversationModal from "../models/conversation.model.js";
import MessageModal from "../models/message.model.js";
import { getReceiverSocketID, io } from "../socket/socket.js";

export const sendingMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await ConversationModal.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await ConversationModal.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new MessageModal({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();

    //The below statements of saving in Conversation and Messages will run in Parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET IO
    const receiverSocketID = getReceiverSocketID(receiverId);
    if (receiverSocketID) {
      // io.to(<socket.id>) sends the event to a perticular Sicket ID client where as io.emit() sends to all elients
      io.to(receiverSocketID).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in Sending Message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: ChattingUserID } = req.params;
    const senderId = req.user._id;
    const conversation = await ConversationModal.findOne({
      participants: { $all: [senderId, ChattingUserID] },
    }).populate("messages"); //Return or Populate the messages in "messages" table or model

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in Getting the Message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

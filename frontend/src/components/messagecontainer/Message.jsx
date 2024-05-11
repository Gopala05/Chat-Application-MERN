import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime";

const Message = ({ message }) => {
  const { user } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromUser = message.senderId === user._id;

  const chatClass = fromUser ? "chat-end" : "chat-start";

  const ProfileImage = fromUser
    ? user.profilePic
    : selectedConversation?.profileImage;

  const MessageBackground = fromUser ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={ProfileImage} alt="User Avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${MessageBackground} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-black font-extrabold opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

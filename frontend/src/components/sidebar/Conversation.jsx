import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { usersOnline } = useSocketContext();
  const isOnline = usersOnline.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 hover:rounded-2xl rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500 rounded-2xl" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profileImage} alt="User Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span
              className={`text-sm ${
                isOnline ? "text-green-300" : "text-black"
              } font-extrabold`}
            >
              {" "}
              {isOnline ? "online" : "offline"}
            </span>
          </div>
        </div>
      </div>

      {!lastIdx ? <div className="divider my-0 py-0 h-1" /> : null}
    </>
  );
};

export default Conversation;

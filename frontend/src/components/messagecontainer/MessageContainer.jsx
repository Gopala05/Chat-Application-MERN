import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //Clean Up
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  console.log(selectedConversation);

  return (
    <div className="md:min-w-[450px] w-[50vw] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex gap-5 bg-gray-900 items-center p-5 mb-2">
            <span className="label-text text-white ">
              {
                <img
                  src={selectedConversation.profileImage}
                  width={30}
                  height={30}
                />
              }
            </span>
            <span className="text-white font-bold text-xl">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {user.fullName}</p>
        <p>Select a Chat to Start your Conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

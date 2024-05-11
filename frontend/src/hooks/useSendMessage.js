import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        JSON.stringify({message}),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;

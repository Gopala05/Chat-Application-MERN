import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const GetMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/message/${selectedConversation._id}`
        );
        const data = response.data;
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    selectedConversation?._id ? GetMessages() : null;
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;

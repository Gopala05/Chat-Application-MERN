import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Search = () => {
  const [serach, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serach) return;
    if (serach.length < 3) {
      return toast.error("Search input must be at least 3 characters Long");
    }
    const conversation = conversations.find((user) =>
      user.fullName.toLowerCase().includes(serach.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setSearch("");
      toast.error("No such user exists :(");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search......"
        className="input input-bordered rounded-full"
        value={serach}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FcSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;

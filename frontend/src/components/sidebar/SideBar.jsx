import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogOut from "./LogOut";

const SideBar = () => {
  return (
    <div className="border-r w-[50vw] border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <LogOut />
    </div>
  );
};

export default SideBar;

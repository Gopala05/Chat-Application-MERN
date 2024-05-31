import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messagecontainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[90vh] md:h-[90vh] rounded-lg overflow-hidden bg-blue-400 bg-clip-padding border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;

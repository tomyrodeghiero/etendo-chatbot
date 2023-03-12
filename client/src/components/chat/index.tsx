import React from "react";
import Search from "./search";
import WelcomeChat from "./welcome-chat";

const Chat = () => {
  return (
    <div className="relative h-full w-full bg-gray-500 ">
      <WelcomeChat />
      {/* <Search /> */}
    </div>
  );
};

export default Chat;

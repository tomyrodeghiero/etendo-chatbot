import React from "react";
import FilterChats from "./filter-chats";
import ChatList from "./chat-list";

const Sidebar = () => {
  return (
    <div className="flex h-full w-[30%] flex-col border-r border-gray-400">
      {/* First part: 20% */}
      <FilterChats />

      {/* Second part: 70% */}
      <div className="border-t border-gray-400">
        <ChatList />
      </div>

      {/* Third part: 10% */}
      <div className="absolute bottom-0 flex w-full gap-3 border-t p-5">
        <img
          className="h-5"
          src="/assets/icons/trash.png"
          alt="Etendo Logotype"
        />
        <p className="text-sm">Borrar todas las conversaciones</p>
      </div>
    </div>
  );
};

export default Sidebar;

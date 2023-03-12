import React from "react";

const NewChat = () => {
  return (
    <div className="flex w-full items-center gap-3 border-b border-gray-400 px-5 py-4">
      <img
        className="h-7 cursor-pointer"
        src="/assets/icons/new-chat.png"
        alt="Etendo Logotype"
      />
      <h2 className="cursor-pointer font-medium text-blue-900">Nuevo chat</h2>
    </div>
  );
};

export default NewChat;

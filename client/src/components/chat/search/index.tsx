import React from "react";

const Search = () => {
  return (
    <div className="h-[10%] w-full">
      <div className="relative mx-5">
        <input
          className="w-full rounded-lg bg-white py-3 pl-5 pr-16 placeholder-gray-400 outline-none focus:shadow"
          type="text"
          placeholder="Escribe algo..."
        />

        <div className="absolute top-0 right-0 flex h-full cursor-pointer items-center gap-2 pr-5">
          <img
            className="h-[0.65rem]"
            src="/assets/icons/send-arrow.png"
            alt="Etendo Logotype"
          />
          <span className="text-sm text-gray-600">Enviar</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

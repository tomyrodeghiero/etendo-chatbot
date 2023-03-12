import React from "react";

const FilterChats = () => {
  return (
    <div className="w-full px-5 py-4">
      <div className="relative flex flex-col gap-2">
        <div className="flex items-end justify-between">
          <div className="text-[1.7rem] font-semibold text-blue-900">Chats</div>

          <div className="absolute right-0 -top-1 flex flex-col items-end justify-end">
            <p className="text-end text-[0.75rem] text-gray-700">Ordenar por</p>

            <div className="flex cursor-pointer items-center gap-2">
              <h5 className="text-[0.85rem] font-medium text-gray-700">
                Recientes
              </h5>
              <img
                className="flex h-2"
                src="/assets/icons/arrow-bottom.png"
                alt="Etendo Logotype"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative flex items-center">
            <img
              className="absolute left-3 mr-3 h-[0.8rem]"
              src="/assets/icons/search.png"
              alt="Etendo Logotype"
            />
            <input
              type="text"
              placeholder="Escribe el chat que quieres buscar"
              className="w-full rounded border-[1.5px] py-[0.3rem] pl-8 pr-4 text-[0.85rem] text-gray-700 placeholder-gray-400 outline-none focus:shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterChats;

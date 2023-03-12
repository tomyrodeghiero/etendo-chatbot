import React, { useState } from "react";

const UserNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex h-[10%] items-center justify-between border-b border-gray-400 px-8 py-4">
      {/* Logo in the left */}
      <div>
        <img
          className="h-10"
          src="/assets/etendo-logotype.png"
          alt="Etendo Logotype"
        />
      </div>

      {/* Components in the right */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img
            className="h-5"
            src="/assets/icons/light-theme.png"
            alt="Etendo Logotype"
          />
          {/* Switch component */}
          <div
            className="flex h-5 w-9 cursor-pointer rounded-full bg-gray-400"
            onClick={toggleDarkMode}
          >
            <div
              className={`h-5 w-5 transform rounded-full bg-gray-600 shadow-md transition-transform ${
                darkMode ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
          <img
            className="h-4"
            src="/assets/icons/dark-theme.png"
            alt="Etendo Logotype"
          />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[0.9rem] text-gray-600">Buenas tardes, Usuario</p>
          <img
            className="h-7"
            src="/assets/icons/user.png"
            alt="Etendo Logotype"
          />
        </div>

        <img
          className="h-4"
          src="/assets/icons/dots.png"
          alt="Etendo Logotype"
        />
      </div>
    </nav>
  );
};

export default UserNavbar;

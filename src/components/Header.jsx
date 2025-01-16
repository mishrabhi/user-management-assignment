import React from "react";
import { useTheme } from "../context/themeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-bold">User App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-md dark:bg-yellow-500"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
};

export default Header;

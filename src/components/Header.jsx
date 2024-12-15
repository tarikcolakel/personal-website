import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { toggleDarkMode } = useTheme();
  const { toggleLanguage, language } = useLanguage();

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      {/* Logo or Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        My Portfolio
      </h1>

      {/* Buttons Container */}
      <div className="flex space-x-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {language === "en" ? "Dark Mode" : "Karanlık Mod"}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 rounded-md shadow-sm hover:bg-gray-300-600 transition"
        >
          {language === "en" ? "Switch to Turkish" : "Türkçeye Geç"}
        </button>
      </div>
    </header>
  );
};

export default Header;

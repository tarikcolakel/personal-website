import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { toggleDarkMode } = useTheme();
  const { toggleLanguage, language } = useLanguage();

  return (
    <header className="header">
      <div className="header-buttons">
        <button onClick={toggleDarkMode}>Dark Mode</button>
        <button onClick={toggleLanguage}>
          {language === "en" ? "Switch to Turkish" : "Switch to English"}
        </button>
      </div>
    </header>
  );
};

export default Header;

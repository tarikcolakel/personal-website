import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { toggleLanguage, languageData } = useLanguage();

  return (
    <div className={`header-container ${isDarkMode ? "dark" : ""}`}>
      <header className="header">
        <div className="header-right">
          <button className="toggle-mode" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="toggle-language" onClick={toggleLanguage}>
            {languageData.switchTo}
          </button>
        </div>
      </header>
      <main className="content">
        <h1>{languageData.greeting}</h1>
        <p>{languageData.description}</p>
      </main>
    </div>
  );
};

export default Header;

import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Dark mode context'i
import { useLanguage } from '../context/LanguageContext'; // Dil context'i

const ThemeAndLanguageToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Tema bilgilerini alıyoruz
  const { language, changeLanguage } = useLanguage(); // Dil bilgisini alıyoruz

  return (
    <div className="button-container">
      {/* Dark Mode butonu */}
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Dil Değiştirme butonu */}
      <button onClick={() => changeLanguage(language === 'en' ? 'tr' : 'en')}>
        {language === 'en' ? 'Türkçeye Geç' : 'English'}
      </button>
    </div>
  );
};

export default ThemeAndLanguageToggle;

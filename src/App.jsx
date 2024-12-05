import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext'; // useTheme hook'u
import { LanguageProvider } from './context/LanguageContext'; // LanguageProvider
import TranslationComponent from './components/TranslationComponent'; // Dil değiştirme bileşeni
import ThemeAndLanguageToggle from './components/ThemeAndLanguageToggle'; // Dark mode ve dil butonları
import { ThemeProvider } from './context/ThemeContext'; 
import Skills from "./components/Skils"
import './App.css';
import Profile from './components/Profile';

const App = () => {
  const { isDarkMode } = useTheme(); // Tema durumunu alıyoruz

  useEffect(() => {
    // Dark mode etkinse body'ye dark-mode sınıfını ekliyoruz
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
  
      <TranslationComponent /> {/* Dil değiştirme bileşeni */}
      <ThemeAndLanguageToggle /> {/* Dark mode ve dil butonları */}
      <Skills />
      <Profile/>
    </div>
  );
};

// ThemeProvider'ı kullanarak App'i sarmalıyoruz
const RootApp = () => (
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);

export default RootApp;

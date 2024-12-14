import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // İlk renderda, localStorage'dan tema bilgisini alıyoruz.
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Dark mode durumunu değiştirdiğimizde, bunu localStorage'a kaydediyoruz.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("isDarkMode", JSON.stringify(true));
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("isDarkMode", JSON.stringify(false));
    }
  }, [isDarkMode]);

  // Dark mode butonuna tıklanarak mod değiştirildiğinde çağrılan fonksiyon.
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

// Tema için context'i oluşturuyoruz
const ThemeContext = createContext();

// ThemeProvider bileşeni
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook'u
export const useTheme = () => {
  return useContext(ThemeContext);
};

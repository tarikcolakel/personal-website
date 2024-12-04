import React, { createContext, useContext, useState } from 'react';

// Dil için context'i oluşturuyoruz
const LanguageContext = createContext();

// LanguageProvider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Varsayılan dil İngilizce

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// useLanguage hook'u
export const useLanguage = () => {
  return useContext(LanguageContext);
};

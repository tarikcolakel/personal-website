import React, { createContext, useState, useContext } from "react";

// Dil için context oluştur
const LanguageContext = createContext();

const initialLanguageData = {
  en: {
    greeting: "I’m Ahmet Tarık. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
    description: "This is a demo of dark mode and language switching.",
    switchTo: "Türkçe'ye geç",
    skills: "Skills",
    profile: "Profile",
  },
  tr: {
    greeting: "Ben Ahmet Tarık. Ben tam kapsamlı bir geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünler üretebilirim. Hadi tanışalım!",
    description: "Bu, karanlık mod ve dil değiştirmenin bir demosudur.",
    switchTo: "English",
    skills: "Yetenekler",
    profile: "Profil",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const languageData = initialLanguageData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

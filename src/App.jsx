import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header />
          <Skills />
          <Profile />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

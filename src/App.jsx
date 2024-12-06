import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";
import Projects from "./components/Projects";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Content />
        <Skills/>
        <Profile/>
        <Projects/>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

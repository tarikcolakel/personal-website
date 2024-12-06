import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { texts, language } = useLanguage();
  return (
    <div className="projects-container">
      {/* Left side */}
      <div className="left-projects">
        <h2>{texts[language].randomJokes}</h2>
        <p>
        {texts[language].randomJokesDescription}
        </p>
        <div className="project-buttons">
          <button className="project-btn">{texts[language].react}</button>
          <button className="project-btn">{texts[language].axios}</button>
          <button className="project-btn">{texts[language].vercel}</button>
        </div>
        <div className="project-buttons">
          <button className="project-btn">{texts[language].router}</button>
        </div>
        <div className="project-links">
          <a href="https://github.com" className="project-link">{texts[language].github}</a>
          <a href="https://app.com" className="project-link">{texts[language].goToApp}</a>
        </div>
        <img src="/f246155782db0594c00c688cdbf27f80.png" alt="Random Jokes" />
      </div>

      {/* Right side */}
      <div className="right-projects">
        <h2>{texts[language].areYouBored}</h2>
        <p>
        {texts[language].randomJokesDescription}
        </p>
        <div className="project-buttons">
          <button className="project-btn">{texts[language].react}</button>
          <button className="project-btn">{texts[language].redux}</button>
          <button className="project-btn">{texts[language].vercel}</button>
        </div>
        <div className="project-buttons">
          <button className="project-btn">{texts[language].axios}</button>
          <button className="project-btn">{texts[language].router}</button>
        </div>
        <div className="project-links">
          <a href="https://github.com" className="project-link">{texts[language].github}</a>
          <a href="https://app.com" className="project-link">{texts[language].goToApp}</a>
        </div>
        <img src="/f246155782db0594c00c688cdbf27f80.png" alt="Are you bored?" />
      </div>
    </div>
  );
};

export default Projects;

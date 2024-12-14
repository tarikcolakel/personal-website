import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { texts, language } = useLanguage();

  return (
    <div className="projects-container grid gap-8 p-6 md:grid-cols-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Left Project */}
      <div className="left-projects bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{texts[language].randomJokes}</h2>
        <p className="text-lg leading-relaxed">{texts[language].randomJokesDescription}</p>
        <div className="project-buttons flex flex-wrap gap-2">
          <button className="project-btn bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
            {texts[language].react}
          </button>
          <button className="project-btn bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
            {texts[language].axios}
          </button>
          <button className="project-btn bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition">
            {texts[language].vercel}
          </button>
          <button className="project-btn bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600 transition">
            {texts[language].router}
          </button>
        </div>
        <div className="project-links flex gap-4">
          <a
            href="https://github.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[language].github}
          </a>
          <a
            href="https://app.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[language].goToApp}
          </a>
        </div>
        <img
          src="/f246155782db0594c00c688cdbf27f80.png"
          alt="Random Jokes"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Project */}
      <div className="right-projects bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{texts[language].areYouBored}</h2>
        <p className="text-lg leading-relaxed">{texts[language].randomJokesDescription}</p>
        <div className="project-buttons flex flex-wrap gap-2">
          <button className="project-btn bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
            {texts[language].react}
          </button>
          <button className="project-btn bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition">
            {texts[language].redux}
          </button>
          <button className="project-btn bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition">
            {texts[language].vercel}
          </button>
          <button className="project-btn bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
            {texts[language].axios}
          </button>
          <button className="project-btn bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600 transition">
            {texts[language].router}
          </button>
        </div>
        <div className="project-links flex gap-4">
          <a
            href="https://github.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[language].github}
          </a>
          <a
            href="https://app.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[language].goToApp}
          </a>
        </div>
        <img
          src="/f246155782db0594c00c688cdbf27f80.png"
          alt="Are you bored?"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Projects;

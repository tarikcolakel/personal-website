import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Linkedin, Github } from "lucide-react";

const Content = () => {
  const { texts, language } = useLanguage();

  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Text Container */}
      <div className="text-container flex flex-col items-start md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">{texts[language].greeting}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{texts[language].description}</p>
        <div className="freelance-container flex items-center gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:scale-110 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:scale-110 transition">
            <Github className="w-6 h-6" />
          </a>
          <p className="text-base md:text-lg">{texts[language].freelance}</p>
        </div>
        <p className="text-base md:text-lg">
          {texts[language].invite}{" "}
          <a
            href="mailto:tarikcolakel@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
          >
            tarikcolakel@gmail.com
          </a>
        </p>
      </div>

      {/* Image Container */}
      <div className="image-container flex justify-center md:w-1/2">
        <img
          src="6422803b-bb8e-438b-885e-10087fc983f9.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
        />
      </div>
    </main>
  );
};

export default Content;

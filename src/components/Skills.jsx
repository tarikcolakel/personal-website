import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const skillsData = [
  { name: "JavaScript", imgSrc: "/icons/JavaScript-logo.png" },
  { name: "React", imgSrc: "/icons/react-logo.png" },
  { name: "Redux", imgSrc: "/icons/redux-logo.png" },
  { name: "Node.js", imgSrc: "/icons/node-logo.png" },
  { name: "VS Code", imgSrc: "/icons/vscode-logo.png" },
  { name: "Figma", imgSrc: "/icons/figma-logo.png" },
];

const Skills = () => {
  const { texts, language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <div className="skills-container bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">{texts[language].skillsTitle}</h2>
      <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={skill.imgSrc}
              alt={skill.name}
              className="skill-logo w-16 h-16 mb-4 object-contain"
            />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

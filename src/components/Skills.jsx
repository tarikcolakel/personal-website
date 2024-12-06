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
    <div className={`skills-container ${isDarkMode ? "dark" : ""}`}>
      <h2>{texts[language].skillsTitle}</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.imgSrc} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

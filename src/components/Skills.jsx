import React from "react";


const Skills = () => {

  const skills = [
    { logo: "/icons/JavaScript-logo.png", name: "JAVASCRIP" },
    { logo: "/icons/react-logo.png", name: "REACT" },
    { logo: "/icons/redux-logo.png", name: "REDUX" },
    { logo: "/icons/node-logo.png", name: "NODE" },
    { logo: "/icons/vscode-logo.png", name: "VS CODE" },
    { logo: "/icons/figma-logo.png", name: "FIGMA" },
  ];

  return (
    <div >
      <h2 className="skills-title">Skills</h2>
      <div className="translation-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Linkedin,Github } from 'lucide-react';

const Content = () => {
  const { texts, language } = useLanguage();

  return (
    <main className="content">
      <div className="text-container">
        <h1>{texts[language].greeting}</h1>
        <p>{texts[language].description}</p>
        <div className="freelance-container">
          <Linkedin/>
          <Github/>
          <p>{texts[language].freelance}</p>
          <p>
            {texts[language].invite}{" "}
            <a href="mailto:pratamaiosi@gmail.com">pratamaiosi@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img
          src="6422803b-bb8e-438b-885e-10087fc983f9.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </main>
  );
};

export default Content;

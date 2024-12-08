import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { texts, language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <div className={`profile-container ${isDarkMode ? "dark" : ""}`}>
      <div className="profile-left">
        <h2>{texts[language].basicInfo}</h2>
        <ul>
          <li>
            <strong>{texts[language].birthdate}</strong>: 06.08.1999
          </li>
          <li>
            <strong>{texts[language].city}</strong>: İstanbul
          </li>
          <li>
            <strong>{texts[language].education}</strong>: Kocaeli Ünv. Math , 2025
          </li>
          <li>
            <strong>{texts[language].preferredRole}</strong>: Frontend, UI
          </li>
        </ul>
      </div>

      <div className="profile-right">
        <h2>{texts[language].aboutMe}</h2>
        <p>{texts[language].aboutMeDescription}</p>
      </div>
    </div>
  );
};

export default Profile;

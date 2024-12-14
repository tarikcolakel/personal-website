import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { texts, language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition`}
    >
      {/* Profile Left */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="profile-left md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700">
            {texts[language].basicInfo}
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong className="font-medium">{texts[language].birthdate}</strong>:{" "}
              06.08.1999
            </li>
            <li>
              <strong className="font-medium">{texts[language].city}</strong>: İstanbul
            </li>
            <li>
              <strong className="font-medium">{texts[language].education}</strong>:{" "}
              Kocaeli Ünv. Math, 2025
            </li>
            <li>
              <strong className="font-medium">{texts[language].preferredRole}</strong>:{" "}
              Frontend, UI
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="profile-right md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700">
            {texts[language].aboutMe}
          </h2>
          <p className="text-lg leading-relaxed">{texts[language].aboutMeDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

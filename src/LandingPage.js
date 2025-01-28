// LandingPage.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importing React Router for navigation

const LandingPage = () => {
  // State to manage language selection
  const [language, setLanguage] = useState("en");
  const history = useNavigate(); // React Router hook for navigation

  // Translations for both English and French
  const translations = {
    en: {
      welcome: "Welcome to CultureCam!",
      surveyConsent: "Start the process",
      languageChoice: "Choose Language",
    },
    fr: {
      welcome: "Bienvenue sur CultureCam!",
      surveyConsent: "Commencez le processus",
      languageChoice: "Choisissez la langue",
    },
  };

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Function to handle navigation to the survey and consent page
  const startProcess = () => {
    history.push("/survey");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{translations[language].welcome}</h1>

      {/* Buttons to switch between English and French */}
      <div>
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("fr")}>Français</button>
      </div>

      {/* Button to start the survey and consent process */}
      <div>
        <button
          onClick={startProcess} // Navigate to the survey page
        >
          {translations[language].surveyConsent}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

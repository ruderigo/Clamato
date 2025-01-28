// SurveyPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const SurveyPage = ({ language }) => {
  const [consent, setConsent] = useState(false); // Consent state for checkbox
  const history = useNavigate(); // React Router hook for navigation

  // Translations for English and French versions of the survey
  const translations = {
    en: {
      surveyTitle: "Survey and Consent",
      consentLabel: "I agree to the terms and conditions",
      proceed: "Proceed to QR Code Scan",
    },
    fr: {
      surveyTitle: "Enquête et consentement",
      consentLabel: "J'accepte les termes et conditions",
      proceed: "Passer à la numérisation du code QR",
    },
  };

  // Function to handle consent checkbox change
  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  // Function to proceed after consent is given
  const handleProceed = () => {
    if (consent) {
      history.push("/qrscan"); // Navigate to QR scanner if consent is given
    } else {
      alert("You need to agree to the terms to proceed."); // Alert if consent is not given
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{translations[language].surveyTitle}</h2>
      {/* Checkbox for consent */}
      <label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
        {translations[language].consentLabel}
      </label>
      <br />
      {/* Button to proceed to QR code scanning page */}
      <button
        onClick={handleProceed} // Navigate to QR scan page if consent is given
        disabled={!consent} // Disable the button if consent is not checked
      >
        {translations[language].proceed}
      </button>
    </div>
  );
};

export default SurveyPage;
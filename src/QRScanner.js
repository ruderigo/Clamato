// QRScanner.js

import React, { useState } from "react";
import QrReader from 'react-qr-reader'; // QR code reader component
import { useHistory } from 'react-router-dom'; // React Router for navigation

const QRScanner = ({ language }) => {
  const [scanResult, setScanResult] = useState(null); // State to hold scan result
  const history = useHistory(); // React Router hook for navigation

  // Translations for QR scanner
  const translations = {
    en: {
      scanQR: "Scan QR Code",
      error: "Error scanning QR code",
      result: "Scanned Result",
    },
    fr: {
      scanQR: "Scanner le code QR",
      error: "Erreur lors du scan du code QR",
      result: "Résultat scanné",
    },
  };

  // Function to handle successful QR code scan
  const handleScan = (data) => {
    if (data) {
      setScanResult(data); // Set the scanned result
      // Navigate to AR experience after scanning QR code
      setTimeout(() => {
        history.push("/ar"); // Redirect to AR experience after 1 second
      }, 1000); // Wait to show the scan result before navigating
    }
  };

  // Function to handle QR code scan errors
  const handleError = (err) => {
    console.error(translations[language].error, err); // Log the error to console
  };

  return (
    <div>
      <h2>{translations[language].scanQR}</h2>
      {/* QR code scanner component */}
      <QrReader
        delay={300}
        style={{ width: '100%' }}
        onError={handleError}
        onScan={handleScan}
      />
      {/* Show scanned result if available */}
      {scanResult && <p>{translations[language].result}: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;

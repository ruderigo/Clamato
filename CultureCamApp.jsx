import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * The CultureCamApp component serves as the landing page for the CultureCam project.
 * This page provides users with the ability to:
 * - Launch the QR scanner to start the AR interview experience.
 * - Switch between English and French languages.
 */
export default function CultureCamApp() {
  // State to manage the current language (default is English).
  const [language, setLanguage] = useState("en");

  /**
   * Toggles the language state between English ("en") and French ("fr").
   */
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      /**
       * The main container is styled to:
       * - Center its content both vertically and horizontally.
       * - Have a light gray background and adequate padding.
       */
    >
      <Card 
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-6"
        /**
         * The card component serves as the main content area:
         * - It has a maximum width for responsiveness.
         * - Includes rounded corners, a shadow effect, and padding for a clean design.
         */
      >
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">
            {/* Display a welcome message based on the current language. */}
            {language === "en" ? "Welcome to CultureCam" : "Bienvenue sur CultureCam"}
          </h1>
          <p className="text-gray-700 text-center mb-6">
            {/* Instructional text, displayed in the selected language. */}
            {language === "en"
              ? "Scan the QR code to start the AR interview experience."
              : "Scannez le code QR pour commencer l'expérience d'entrevue en AR."}
          </p>

          <Button 
            className="w-full mb-4" 
            onClick={() => alert("QR Scanner launching...")}
            /**
             * The primary button launches the QR scanner.
             * - Displays text based on the current language.
             * - Currently triggers an alert as a placeholder.
             */
          >
            {language === "en" ? "Open QR Scanner" : "Ouvrir le scanner QR"}
          </Button>

          <Button 
            variant="secondary" 
            className="w-full" 
            onClick={toggleLanguage}
            /**
             * Secondary button allows users to toggle the language.
             * - Updates the state to switch between English and French.
             */
          >
            {language === "en" ? "Switch to French" : "Passer en anglais"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
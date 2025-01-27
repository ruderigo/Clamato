// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Importing React Router
import LandingPage from "./LandingPage"; // Importing landing page component
import SurveyPage from "./SurveyPage"; // Importing survey page component
import QRScanner from "./QRScanner"; // Importing QR scanner component
import ARExperience from "./ARExperience"; // Importing AR experience component

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Route for the Landing Page */}
        <Route path="/" exact component={LandingPage} />
        
        {/* Route for the Survey and Consent page */}
        <Route path="/survey" exact render={(props) => <SurveyPage {...props} language="en" />} />
        
        {/* Route for the QR Code Scanner page */}
        <Route path="/qrscan" exact render={(props) => <QRScanner {...props} language="en" />} />
        
        {/* Route for the AR Experience page */}
        <Route path="/ar" exact component={ARExperience} />
      </Switch>
    </Router>
  );
};

export default App;
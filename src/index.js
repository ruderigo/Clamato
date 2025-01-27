// Importing React library to use JSX syntax
import React from 'react';
// Importing ReactDOM to interact with the DOM
import ReactDOM from 'react-dom';
// Importing the root App component that will manage the entire app
import App from './App';

// Using ReactDOM to render the App component inside the element with the id 'root' in the HTML
ReactDOM.render(
  <React.StrictMode>  {/* StrictMode helps highlight potential problems in your application */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This matches the div in your public/index.html file
);
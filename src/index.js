console.log('React application script is running');

import './styles/styles.css';
import './styles/social-media.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{backgroundColor: 'blue', color: 'white', padding: '20px', margin: '20px'}}>
    <h1>Milky Tours React App is loaded!</h1>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

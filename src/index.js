console.log('React application script is running');

import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from './components/MyComponent';
import './styles/styles.css';
import './styles/social-media.css';

const App = () => (
  <div style={{backgroundColor: 'blue', color: 'white', padding: '20px', margin: '20px'}}>
    <h1>Milky Tours React App is loaded!</h1>
    <MyComponent />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

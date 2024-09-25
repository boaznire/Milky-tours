import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px', margin: '20px' }}>
    <h1>Milky Tours React App is loaded!</h1>
  </div>
);

// React 18+ rendering syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <h1>מילקי תיירות: השער שלך להרפתקאות למרחקים ארוכים במחיר משתלם</h1>
    
    <div className="section" id="intro">
      <h2>גלו את העולם מבלי לרוקן את הכיס</h2>
      <p>במילקי תיירות, אנו מבינים שהמסע חשוב לא פחות מהיעד. לכן אנו מתמחים במתן שילובים שאין להם מתחרים של מחיר ומשך טיסה לנסיעות למרחקים ארוכים.</p>
    </div>

    <div className="section" id="advantages">
      <h2>היתרון הייחודי שלנו</h2>
      <ul>
        <li>יחס מחיר-משך הטוב ביותר בקטגוריה</li>
        <li>רשת נרחבת</li>
        <li>מסלולים מותאמים אישית</li>
      </ul>
    </div>

    <div className="section" id="destinations">
      <h2>יעדים שבהם אנו מצטיינים</h2>
      <div className="destination">
        <h3>המזרח הרחוק</h3>
        <p>חקרו את הרחובות התוססים של טוקיו, הירגעו בחופי באלי, חוו את התרבות של בייג'ינג</p>
      </div>
      <div className="destination">
        <h3>אוסטרליה</h3>
        <p>צללו לשונית המחסום הגדולה, עמדו מול הדרה של אולורו, גלו את חיי העיר התוססים של סידני</p>
      </div>
      <div className="destination">
        <h3>ארצות הברית</h3>
        <p>עמדו ביראת כבוד מול הגרנד קניון, הרגישו את האנרגיה של ניו יורק, התחממו בשמש של הוואי</p>
      </div>
    </div>

    <footer>
      מילקי תיירות - מקרבים את העולם, טיסה אחר טיסה
    </footer>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

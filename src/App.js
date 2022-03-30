import React, { useState } from 'react';
import './index.css';

function App() {
  const [temperature, setTemperature] = useState(10);
  const [bgColor, setBgColor] = useState('cold');

  const handleTempIncrease = () => {
    const newTemperature = temperature + 1;
    setTemperature(newTemperature);
    if (temperature >= 15) {
      setBgColor('hot');
    }
  };

  const handleTempDecrease = () => {
    const newTemperature = temperature - 1;
    setTemperature(newTemperature);
    if (temperature < 15) {
      setBgColor('cold');
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${bgColor}`}>{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={handleTempIncrease}>+</button>
        <button onClick={handleTempDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;

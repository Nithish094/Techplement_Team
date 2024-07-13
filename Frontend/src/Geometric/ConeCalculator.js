// src/components/ConeCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const ConeCalculator = () => {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateCone = async () => {
    const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const surfaceArea = Math.PI * radius * (radius + slantHeight);
    setResult({ volume: volume.toFixed(2), surfaceArea: surfaceArea.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Cone Calculator',
      Inputs: `Radius-(${radius}), Height-(${height})`,
      Outputs: `Volume-(${volume.toFixed(2)}), Surface Area-(${surfaceArea.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Cone Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="radius" className="form-label">Radius:</label>
          <input
            type="number"
            className="form-control"
            id="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height:</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateCone}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Volume: {result.volume}</p>
            <p>Surface Area: {result.surfaceArea}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConeCalculator;

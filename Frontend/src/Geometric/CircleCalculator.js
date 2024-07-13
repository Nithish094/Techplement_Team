// src/components/CircleCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const CircleCalculator = () => {
  const [radius, setRadius] = useState('');
  const [result, setResult] = useState(null);

  const calculateCircle = async () => {
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    setResult({ area: area.toFixed(2), circumference: circumference.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Circle Calculator',
      Inputs: `Radius-(${radius})`,
      Outputs: `Area-(${area.toFixed(2)}), Circumference-(${circumference.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Circle Calculator</h2>
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
        <button className="btn btn-primary w-100" onClick={calculateCircle}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Area: {result.area}</p>
            <p>Circumference: {result.circumference}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircleCalculator;

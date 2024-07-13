// src/components/RightAngledTriangleCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const RightAngledTriangleCalculator = () => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateRightAngledTriangle = async () => {
    const area = (base * height) / 2;
    const hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
    const perimeter = base + height + hypotenuse;
    setResult({ area: area.toFixed(2), perimeter: perimeter.toFixed(2), hypotenuse: hypotenuse.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Right Angled Triangle Calculator',
      Inputs: `Base-(${base}), Height-(${height})`,
      Outputs: `Area-(${area.toFixed(2)}), Perimeter-(${perimeter.toFixed(2)}), Hypotenuse-(${hypotenuse.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Right Angled Triangle Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="base" className="form-label">Base:</label>
          <input
            type="number"
            className="form-control"
            id="base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
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
        <button className="btn btn-primary w-100" onClick={calculateRightAngledTriangle}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Area: {result.area}</p>
            <p>Perimeter: {result.perimeter}</p>
            <p>Hypotenuse: {result.hypotenuse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightAngledTriangleCalculator;

// src/components/IsoscelesTriangleCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const IsoscelesTriangleCalculator = () => {
  const [base, setBase] = useState('');
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const calculateIsoscelesTriangle = async () => {
    const height = Math.sqrt(Math.pow(side, 2) - Math.pow(base / 2, 2));
    const area = (base * height) / 2;
    const perimeter = 2 * side + base;
    setResult({ area: area.toFixed(2), perimeter: perimeter.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Isosceles Triangle Calculator',
      Inputs: `Base-(${base}), Side-(${side})`,
      Outputs: `Area-(${area.toFixed(2)}), Perimeter-(${perimeter.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Isosceles Triangle Calculator</h2>
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
          <label htmlFor="side" className="form-label">Side:</label>
          <input
            type="number"
            className="form-control"
            id="side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateIsoscelesTriangle}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Area: {result.area}</p>
            <p>Perimeter: {result.perimeter}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IsoscelesTriangleCalculator;

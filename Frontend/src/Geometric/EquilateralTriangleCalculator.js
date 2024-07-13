// src/components/EquilateralTriangleCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const EquilateralTriangleCalculator = () => {
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const calculateEquilateralTriangle = async () => {
    const area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    const perimeter = 3 * side;
    setResult({ area: area.toFixed(2), perimeter: perimeter.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Equilateral Triangle Calculator',
      Inputs: `Side-(${side})`,
      Outputs: `Area-(${area.toFixed(2)}), Perimeter-(${perimeter.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Equilateral Triangle Calculator</h2>
      <div className="card p-4">
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
        <button className="btn btn-primary w-100" onClick={calculateEquilateralTriangle}>Calculate</button>
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

export default EquilateralTriangleCalculator;

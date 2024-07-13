// src/components/PercentageCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [base, setBase] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculatePercentage = async () => {
    const percentageValue = (percentage / 100) * base;
    setResult(percentageValue);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Percentage Calculator',
      Inputs: `Base-(${base}), Percentage-(${percentage})`,
      Outputs: `Result-(${percentageValue})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Percentage Calculator</h2>
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
          <label htmlFor="percentage" className="form-label">Percentage (%):</label>
          <input
            type="number"
            className="form-control"
            id="percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculatePercentage}>Calculate</button>
        {result !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Percentage Value: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageCalculator;

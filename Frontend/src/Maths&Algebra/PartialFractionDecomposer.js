// src/components/PartialFractionCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const PartialFractionCalculator = () => {
  const [numerator1, setNumerator1] = useState('');
  const [denominator1, setDenominator1] = useState('');
  const [numerator2, setNumerator2] = useState('');
  const [denominator2, setDenominator2] = useState('');
  const [result, setResult] = useState('');

  const calculatePartialFraction = async () => {
    // Assume we have a method or library to calculate partial fractions
    const partialFraction = `(${numerator1}/${denominator1}) + (${numerator2}/${denominator2})`;
    setResult(partialFraction);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Partial Fraction Calculator',
      Inputs: `Numerator1-(${numerator1}), Denominator1-(${denominator1}), Numerator2-(${numerator2}), Denominator2-(${denominator2})`,
      Outputs: `Partial Fraction-(${partialFraction})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Partial Fraction Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="numerator1" className="form-label">Numerator 1:</label>
          <input
            type="number"
            className="form-control"
            id="numerator1"
            value={numerator1}
            onChange={(e) => setNumerator1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="denominator1" className="form-label">Denominator 1:</label>
          <input
            type="number"
            className="form-control"
            id="denominator1"
            value={denominator1}
            onChange={(e) => setDenominator1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numerator2" className="form-label">Numerator 2:</label>
          <input
            type="number"
            className="form-control"
            id="numerator2"
            value={numerator2}
            onChange={(e) => setNumerator2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="denominator2" className="form-label">Denominator 2:</label>
          <input
            type="number"
            className="form-control"
            id="denominator2"
            value={denominator2}
            onChange={(e) => setDenominator2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculatePartialFraction}>Calculate</button>
        {result !== '' && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Partial Fraction: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartialFractionCalculator;

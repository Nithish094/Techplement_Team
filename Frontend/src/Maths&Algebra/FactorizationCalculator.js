// src/components/FactorizationCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const FactorizationCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const factorizeNumber = async () => {
    // Factorization logic goes here
    const factors = []; // Replace with actual factorization logic
    setResult(factors.join(', '));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Factorization Calculator',
      Inputs: `Number-(${number})`,
      Outputs: `Factors-(${factors.join(', ')})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Factorization Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Number:</label>
          <input
            type="number"
            className="form-control"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={factorizeNumber}>Factorize</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Factors: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactorizationCalculator;
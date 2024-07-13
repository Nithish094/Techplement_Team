// src/components/BooleanAlgebraSimplifier.js
import axios from 'axios';
import React, { useState } from 'react';

const BooleanAlgebraSimplifier = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const simplifyExpression = async () => {
    // Simplification logic goes here
    const simplifiedExpression = expression; // Replace with actual simplification logic
    setResult(simplifiedExpression);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Boolean Algebra Simplifier',
      Inputs: `Expression-(${expression})`,
      Outputs: `Simplified Expression-(${simplifiedExpression})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Boolean Algebra Simplifier</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="expression" className="form-label">Boolean Expression:</label>
          <input
            type="text"
            className="form-control"
            id="expression"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={simplifyExpression}>Simplify</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Simplified Expression: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooleanAlgebraSimplifier;

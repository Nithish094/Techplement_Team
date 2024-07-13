// src/components/FlowRateCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const FlowRateCalculator = () => {
  const [velocity, setVelocity] = useState('');
  const [area, setArea] = useState('');
  const [result, setResult] = useState('');

  const calculateFlowRate = async () => {
    const flowRate = velocity * area;
    setResult(flowRate);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Flow Rate Calculator',
      Inputs: `Velocity-(${velocity}), Area-(${area})`,
      Outputs: `Flow Rate-(${flowRate})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Flow Rate Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="velocity" className="form-label">Velocity:</label>
          <input
            type="number"
            className="form-control"
            id="velocity"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">Area:</label>
          <input
            type="number"
            className="form-control"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateFlowRate}>Calculate</button>
        {result !== '' && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Flow Rate: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowRateCalculator;

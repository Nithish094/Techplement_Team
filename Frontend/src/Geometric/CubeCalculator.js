// src/components/CubeCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const CubeCalculator = () => {
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const calculateCube = async () => {
    const volume = Math.pow(side, 3);
    const surfaceArea = 6 * Math.pow(side, 2);
    setResult({ volume: volume.toFixed(2), surfaceArea: surfaceArea.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Cube Calculator',
      Inputs: `Side-(${side})`,
      Outputs: `Volume-(${volume.toFixed(2)}), Surface Area-(${surfaceArea.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Cube Calculator</h2>
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
        <button className="btn btn-primary w-100" onClick={calculateCube}>Calculate</button>
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

export default CubeCalculator;

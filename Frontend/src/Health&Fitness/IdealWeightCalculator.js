// src/components/IdealWeightCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateIdealWeight = async () => {
    let idealWeight;
    if (gender === 'male') {
      idealWeight = 50 + 2.3 * ((height - 152.4) / 2.54);
    } else {
      idealWeight = 45.5 + 2.3 * ((height - 152.4) / 2.54);
    }
    setResult(idealWeight.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Ideal Weight Calculator',
      Inputs: `Height-(${height} cm),Gender-(${gender})`,
      Outputs: `Ideal Weight-(${idealWeight.toFixed(2)} kg)`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Ideal Weight Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height (cm):</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={calculateIdealWeight}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Ideal Weight: {result} kg</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdealWeightCalculator;

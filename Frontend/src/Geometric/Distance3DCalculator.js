// src/components/Distance3DCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const Distance3DCalculator = () => {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [z1, setZ1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [z2, setZ2] = useState('');
  const [result, setResult] = useState(null);

  const calculateDistance3D = async () => {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
    setResult(distance.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Distance 3D Calculator',
      Inputs: `Point1-(${x1},${y1},${z1}), Point2-(${x2},${y2},${z2})`,
      Outputs: `Distance-(${distance.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">3D Distance Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="x1" className="form-label">x1:</label>
          <input
            type="number"
            className="form-control"
            id="x1"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="y1" className="form-label">y1:</label>
          <input
            type="number"
            className="form-control"
            id="y1"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="z1" className="form-label">z1:</label>
          <input
            type="number"
            className="form-control"
            id="z1"
            value={z1}
            onChange={(e) => setZ1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="x2" className="form-label">x2:</label>
          <input
            type="number"
            className="form-control"
            id="x2"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="y2" className="form-label">y2:</label>
          <input
            type="number"
            className="form-control"
            id="y2"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="z2" className="form-label">z2:</label>
          <input
            type="number"
            className="form-control"
            id="z2"
            value={z2}
            onChange={(e) => setZ2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateDistance3D}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Distance: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Distance3DCalculator;

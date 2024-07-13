// src/components/RectangleCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const RectangleCalculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [result, setResult] = useState(null);

  const calculateRectangle = async () => {
    const area = length * width;
    const perimeter = 2 * (length + width);
    setResult({ area: area.toFixed(2), perimeter: perimeter.toFixed(2) });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Rectangle Calculator',
      Inputs: `Length-(${length}), Width-(${width})`,
      Outputs: `Area-(${area.toFixed(2)}), Perimeter-(${perimeter.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Rectangle Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="length" className="form-label">Length:</label>
          <input
            type="number"
            className="form-control"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="width" className="form-label">Width:</label>
          <input
            type="number"
            className="form-control"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateRectangle}>Calculate</button>
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

export default RectangleCalculator;

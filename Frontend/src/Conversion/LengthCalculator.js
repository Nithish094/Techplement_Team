import React, { useState } from 'react';
import axios from 'axios';

const LengthConverter = () => {
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState(null);
  const [inches, setInches] = useState(null);

  const convertLength = async () => {
    const ft = meters * 3.28084;
    const inc = meters * 39.3701;
    setFeet(ft.toFixed(2));
    setInches(inc.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Length Converter',
      Inputs: `Meters-(${meters})`,
      Outputs: `Feet-(${ft.toFixed(2)}), Inches-(${inc.toFixed(2)})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Length Converter</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="meters" className="form-label">Meters:</label>
          <input
            type="number"
            className="form-control"
            id="meters"
            value={meters}
            onChange={(e) => setMeters(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={convertLength}>Convert</button>
        {feet !== null && inches !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Feet: {feet}</p>
            <p>Inches: {inches}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LengthConverter;

import React, { useState } from 'react';
import axios from 'axios';

const HeightConverter = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState(null);

  const convertHeight = async () => {
    const totalInches = parseFloat(feet) * 12 + parseFloat(inches);
    const cm = totalInches * 2.54;
    setCentimeters(cm.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Height Converter',
      Inputs: `Feet-(${feet}), Inches-(${inches})`,
      Outputs: `Centimeters-(${cm.toFixed(2)})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Height Converter</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="feet" className="form-label">Feet:</label>
          <input
            type="number"
            className="form-control"
            id="feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inches" className="form-label">Inches:</label>
          <input
            type="number"
            className="form-control"
            id="inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={convertHeight}>Convert</button>
        {centimeters && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Height: {centimeters} cm</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeightConverter;

// src/components/BMICalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = async () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    setResult({ bmi: bmi.toFixed(2), category });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'BMI Calculator',
      Inputs: `Height-(${height} cm),Weight-(${weight} kg)`,
      Outputs: `BMI-(${bmi.toFixed(2)}),Category-(${category})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">BMI Calculator</h2>
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
          <label htmlFor="weight" className="form-label">Weight (kg):</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateBMI}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>BMI: {result.bmi}</p>
            <p>Category: {result.category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;

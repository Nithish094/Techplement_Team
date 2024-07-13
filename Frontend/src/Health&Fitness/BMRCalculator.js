// src/components/BMRCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const BMRCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateBMR = async () => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    setResult(bmr.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'BMR Calculator',
      Inputs: `Weight-(${weight} kg),Height-(${height} cm),Age-(${age}),Gender-(${gender})`,
      Outputs: `BMR-(${bmr.toFixed(2)})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">BMR Calculator</h2>
      <div className="card p-4">
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
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
        <button className="btn btn-primary w-100" onClick={calculateBMR}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>BMR: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMRCalculator;

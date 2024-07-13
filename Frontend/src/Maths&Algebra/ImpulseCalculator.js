// src/components/ImpulseCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const ImpulseCalculator = () => {
  const [force, setForce] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateImpulse = async () => {
    const impulse = force * time;
    setResult(impulse);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Impulse Calculator',
      Inputs: `Force-(${force}), Time-(${time})`,
      Outputs: `Impulse-(${impulse})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Impulse Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="force" className="form-label">Force:</label>
          <input
            type="number"
            className="form-control"
            id="force"
            value={force}
            onChange={(e) => setForce(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time:</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateImpulse}>Calculate</button>
        {result !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Impulse: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpulseCalculator;

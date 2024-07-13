import React, { useState } from 'react';
import axios from 'axios';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = async () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Age Calculator',
      Inputs: `BirthDate-(${birthDate})`,
      Outputs: `Calculated Age-(${age})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Age Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="birthdate" className="form-label">Birthdate:</label>
          <input
            type="date"
            className="form-control"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateAge}>Calculate</button>
        {age !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Age: {age} years</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

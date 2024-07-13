import React, { useState } from 'react';
import axios from 'axios';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = async () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let pass = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      pass += charset[randomIndex];
    }
    setPassword(pass);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Password Generator',
      Inputs: `Length-(${length})`,
      Outputs: `Generated Password-(${pass})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Password Generator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="length" className="form-label">Password Length:</label>
          <input
            type="number"
            className="form-control"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={generatePassword}>Generate</button>
        {password && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Password: {password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;

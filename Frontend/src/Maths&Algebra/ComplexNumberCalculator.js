// src/components/ComplexNumberCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const ComplexNumberCalculator = () => {
  const [real1, setReal1] = useState('');
  const [imag1, setImag1] = useState('');
  const [real2, setReal2] = useState('');
  const [imag2, setImag2] = useState('');
  const [result, setResult] = useState(null);

  const addComplexNumbers = async () => {
    const realResult = parseFloat(real1) + parseFloat(real2);
    const imagResult = parseFloat(imag1) + parseFloat(imag2);
    setResult({ real: realResult, imag: imagResult });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Complex Number Calculator',
      Inputs: `Number1-(${real1} + ${imag1}i), Number2-(${real2} + ${imag2}i)`,
      Outputs: `Result-(${realResult} + ${imagResult}i)`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Complex Number Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="real1" className="form-label">Real Part of First Number:</label>
          <input
            type="number"
            className="form-control"
            id="real1"
            value={real1}
            onChange={(e) => setReal1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imag1" className="form-label">Imaginary Part of First Number:</label>
          <input
            type="number"
            className="form-control"
            id="imag1"
            value={imag1}
            onChange={(e) => setImag1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="real2" className="form-label">Real Part of Second Number:</label>
          <input
            type="number"
            className="form-control"
            id="real2"
            value={real2}
            onChange={(e) => setReal2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imag2" className="form-label">Imaginary Part of Second Number:</label>
          <input
            type="number"
            className="form-control"
            id="imag2"
            value={imag2}
            onChange={(e) => setImag2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={addComplexNumbers}>Add</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Result: {result.real} + {result.imag}i</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplexNumberCalculator;

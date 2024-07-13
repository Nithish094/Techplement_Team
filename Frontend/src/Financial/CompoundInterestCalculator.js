import axios from 'axios';
import React, { useState } from 'react';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [timesCompounded, setTimesCompounded] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = async () => {
    const total = principal * Math.pow((1 + (rate / 100) / timesCompounded), timesCompounded * time);
    const interest = total - principal;
    setResult({ interest, total });
    
    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Compound Interest Calculator',
      Inputs: `Principal-(${principal}),Rate-(${rate}),Times Compounded-(${timesCompounded}),Time-(${time})`,
      Outputs: `Interest-(${interest}),Total-(${total})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Compound Interest Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="principal" className="form-label">Principal Amount:</label>
          <input
            type="number"
            className="form-control"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">Interest Rate (%):</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="timesCompounded" className="form-label">Times Compounded:</label>
          <input
            type="number"
            className="form-control"
            id="timesCompounded"
            value={timesCompounded}
            onChange={(e) => setTimesCompounded(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time Period (years):</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateInterest}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Compound Interest: {result.interest}</p>
            <p>Total Amount: {result.total}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;

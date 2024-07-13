import axios from 'axios';
import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [periodicContribution, setPeriodicContribution] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateInvestment = async () => {
    const P = parseFloat(initialInvestment);
    const C = parseFloat(periodicContribution);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = 1; // Assuming annual contributions
    const amount = P * Math.pow(1 + r / n, n * t) + C * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    const interest = amount - (P + C * t);
    setResult({ interest, amount });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Investment Calculator',
      Inputs: `Initial Investment-(${initialInvestment}),Periodic Contribution-(${periodicContribution}),Rate-(${rate}),Time-(${time})`,
      Outputs: `Interest-(${interest}),Total Amount-(${amount})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Investment Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="initialInvestment" className="form-label">Initial Investment:</label>
          <input
            type="number"
            className="form-control"
            id="initialInvestment"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="periodicContribution" className="form-label">Periodic Contribution:</label>
          <input
            type="number"
            className="form-control"
            id="periodicContribution"
            value={periodicContribution}
            onChange={(e) => setPeriodicContribution(e.target.value)}
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
          <label htmlFor="time" className="form-label">Time Period (years):</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateInvestment}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Accumulated Interest: {result.interest}</p>
            <p>Total Amount: {result.amount}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default InvestmentCalculator;

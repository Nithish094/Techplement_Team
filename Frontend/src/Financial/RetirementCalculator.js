import axios from 'axios';
import React, { useState } from 'react';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateRetirement = async () => {
    const age = parseInt(currentAge);
    const retireAge = parseInt(retirementAge);
    const savings = parseFloat(currentSavings);
    const contribution = parseFloat(monthlyContribution);
    const r = parseFloat(rate) / 100 / 12;
    const t = (retireAge - age) * 12;

    const futureValueSavings = savings * Math.pow(1 + r, t);
    const futureValueContributions = contribution * ((Math.pow(1 + r, t) - 1) / r);
    const retirementCorpus = futureValueSavings + futureValueContributions;

    setResult({ retirementCorpus });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Retirement Calculator',
      Inputs: `Current Age-(${currentAge}), Retirement Age-(${retirementAge}), Current Savings-(${currentSavings}), Monthly Contribution-(${monthlyContribution}), Rate-(${rate})`,
      Outputs: `Retirement Corpus-(${retirementCorpus})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Retirement Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="currentAge" className="form-label">Current Age:</label>
          <input
            type="number"
            className="form-control"
            id="currentAge"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="retirementAge" className="form-label">Retirement Age:</label>
          <input
            type="number"
            className="form-control"
            id="retirementAge"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="currentSavings" className="form-label">Current Savings:</label>
          <input
            type="number"
            className="form-control"
            id="currentSavings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monthlyContribution" className="form-label">Monthly Contribution:</label>
          <input
            type="number"
            className="form-control"
            id="monthlyContribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">Annual Interest Rate (%):</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateRetirement}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Retirement Corpus: {result.retirementCorpus}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default RetirementCalculator;

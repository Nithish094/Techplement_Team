import React, { useState } from 'react';
import axios from 'axios';

const BillTipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState(null);

  const calculateTip = async () => {
    const tip = (billAmount * tipPercentage) / 100;
    const total = parseFloat(billAmount) + tip;
    setTipAmount({ tip, total });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Bill Tip Calculator',
      Inputs: `Bill Amount-(${billAmount}), Tip Percentage-(${tipPercentage})`,
      Outputs: `Tip Amount-(${tip}), Total Amount-(${total})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Bill Tip Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="billAmount" className="form-label">Bill Amount:</label>
          <input
            type="number"
            className="form-control"
            id="billAmount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipPercentage" className="form-label">Tip Percentage:</label>
          <input
            type="number"
            className="form-control"
            id="tipPercentage"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateTip}>Calculate</button>
        {tipAmount && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Tip Amount: {tipAmount.tip}</p>
            <p>Total Amount: {tipAmount.total}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillTipCalculator;

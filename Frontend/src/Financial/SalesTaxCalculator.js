import axios from 'axios';
import React, { useState } from 'react';

const SalesTaxCalculator = () => {
  const [price, setPrice] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateTotalPrice = async () => {
    const tax = (price * taxRate) / 100;
    const total = parseFloat(price) + tax;
    setResult({ tax, total });

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Sales Tax Calculator',
      Inputs: `Price-(${price}), Tax Rate-(${taxRate})`,
      Outputs: `Tax-(${tax}), Total-(${total})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Sales Tax Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taxRate" className="form-label">Tax Rate (%):</label>
          <input
            type="number"
            className="form-control"
            id="taxRate"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateTotalPrice}>Calculate</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Tax: {result.tax}</p>
            <p>Total Price: {result.total}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default SalesTaxCalculator;

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error("Error fetching currency data", error);
      }
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`);
      const rate = response.data.rates[targetCurrency];
      const convertedAmount = amount * rate;
      setResult(convertedAmount);

      const res = await axios.post('http://localhost:3050/details/add', {
        CalculatorName: 'Currency Calculator',
        Inputs: `Amount-(${amount}),Source Currency-(${sourceCurrency}),Target Currency-(${targetCurrency})`,
        Outputs: `Converted Amount-(${convertedAmount})`
      });

      if (res.data.message === "Log Details Updated") {
        alert("Details added");
      }
    } catch (error) {
      console.error("Error converting currency", error);
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Currency Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sourceCurrency" className="form-label">Source Currency:</label>
          <select
            className="form-control"
            id="sourceCurrency"
            value={sourceCurrency}
            onChange={(e) => setSourceCurrency(e.target.value)}
          >
            <option value="" disabled>Select source currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="targetCurrency" className="form-label">Target Currency:</label>
          <select
            className="form-control"
            id="targetCurrency"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <option value="" disabled>Select target currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={convertCurrency}>Convert</button>
        {result && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Converted Amount: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default CurrencyCalculator;

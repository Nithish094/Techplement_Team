// src/components/InequalityCalculator.js
import axios from 'axios';
import React, { useState } from 'react';

const InequalityCalculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculateInequality = async () => {
    let resultValue;
    switch (operator) {
      case '<':
        resultValue = operand1 < operand2;
        break;
      case '<=':
        resultValue = operand1 <= operand2;
        break;
      case '>':
        resultValue = operand1 > operand2;
        break;
      case '>=':
        resultValue = operand1 >= operand2;
        break;
      case '==':
        resultValue = operand1 === operand2;
        break;
      default:
        break;
    }
    setResult(resultValue);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Inequality Calculator',
      Inputs: `Operand1-(${operand1}), Operand2-(${operand2}), Operator-(${operator})`,
      Outputs: `Result-(${resultValue})`
    });
    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Inequality Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="operand1" className="form-label">Operand 1:</label>
          <input
            type="number"
            className="form-control"
            id="operand1"
            value={operand1}
            onChange={(e) => setOperand1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="operator" className="form-label">Operator:</label>
          <select
            className="form-control"
            id="operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="<">{'<'}</option>
            <option value="<=">{'<='}</option>
            <option value=">">{'>'}</option>
            <option value=">=">{'>='}</option>
            <option value="==">{'=='}</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="operand2" className="form-label">Operand 2:</label>
          <input
            type="number"
            className="form-control"
            id="operand2"
            value={operand2}
            onChange={(e) => setOperand2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateInequality}>Calculate</button>
        {result !== '' && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Result: {result.toString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InequalityCalculator;

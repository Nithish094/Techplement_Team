// src/components/SalaryCalculator.js
import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';

const SalaryCalculator = () => {
  const [grossSalary, setGrossSalary] = useState('');
  const [deductions, setDeductions] = useState('');
  const [bonuses, setBonuses] = useState('');
  const [netSalary, setNetSalary] = useState(null);

  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary);
    const deduction = parseFloat(deductions);
    const bonus = parseFloat(bonuses);
    const net = gross - deduction + bonus;
    setNetSalary(net.toFixed(2));
  };
  
  return (
    <CalculatorCard title="Salary Calculator">
      <div className="form-group">
        <label>Gross Salary:</label>
        <input type="number" className="form-control" value={grossSalary} onChange={(e) => setGrossSalary(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Deductions:</label>
        <input type="number" className="form-control" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Bonuses:</label>
        <input type="number" className="form-control" value={bonuses} onChange={(e) => setBonuses(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={calculateNetSalary}>Calculate</button>
      {netSalary !== null && (
        <div className="mt-3">
          <p>Net Salary: {netSalary}</p>
        </div>
      )}
    </CalculatorCard>
  );
};

export default SalaryCalculator;

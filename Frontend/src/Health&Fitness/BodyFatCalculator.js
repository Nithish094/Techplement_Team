// src/components/BodyFatCalculator.js
import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState('');

  const calculateBodyFat = () => {
    let bodyFat = 0;
    if (gender === 'male') {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(age)) - 450;
    } else {
      // Assuming you want to use waist and neck for females too; typically, hips would be included.
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + neck) + 0.22100 * Math.log10(age)) - 450;
    }

    setBodyFatPercentage(bodyFat.toFixed(2));
  };

  return (
    <CalculatorCard title="Body Fat Calculator">
      <div className="form-group">
        <label>Gender:</label>
        <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Waist Measurement (cm):</label>
        <input type="number" className="form-control" value={waist} onChange={(e) => setWaist(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Neck Measurement (cm):</label>
        <input type="number" className="form-control" value={neck} onChange={(e) => setNeck(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={calculateBodyFat}>Calculate</button>
      {bodyFatPercentage && (
        <div className="mt-3">
          <p>Body Fat Percentage: {bodyFatPercentage}%</p>
        </div>
      )}
    </CalculatorCard>
  );
};

export default BodyFatCalculator;

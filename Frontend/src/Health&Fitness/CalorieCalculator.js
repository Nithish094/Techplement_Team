// src/components/CalorieCalculator.js
import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';

const CalorieCalculator = () => {
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [dailyCalories, setDailyCalories] = useState(null);

  const calculateCalories = () => {
    let bmrValue = 0;
    if (gender === 'male') {
      bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    let activityFactor = 1.2; // Sedentary by default
    if (activityLevel === 'lightlyActive') {
      activityFactor = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      activityFactor = 1.55;
    } else if (activityLevel === 'veryActive') {
      activityFactor = 1.725;
    } else if (activityLevel === 'extraActive') {
      activityFactor = 1.9;
    }

    const dailyCaloriesNeeded = bmrValue * activityFactor;
    setDailyCalories(dailyCaloriesNeeded.toFixed(2));
  };

  return (
    <CalculatorCard title="Calorie Calculator">
      <div className="form-group">
        <label>Activity Level:</label>
        <select className="form-control" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightlyActive">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderatelyActive">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="veryActive">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="extraActive">Extra active (very hard exercise/sports & physical job)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label>Weight (kg):</label>
        <input type="number" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Height (cm):</label>
        <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={calculateCalories}>Calculate</button>
      {dailyCalories !== null && (
        <div className="mt-3">
          <p>Daily Calorie Needs: {dailyCalories} kcal/day</p>
        </div>
      )}
    </CalculatorCard>
  );
};

export default CalorieCalculator;

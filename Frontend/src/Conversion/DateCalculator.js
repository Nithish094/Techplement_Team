import React, { useState } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [daysDifference, setDaysDifference] = useState(null);

  const calculateDaysDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = (end - start) / (1000 * 60 * 60 * 24);
    setDaysDifference(difference);
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Date Calculator</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={calculateDaysDifference}>Calculate</button>
        {daysDifference !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Days Difference: {daysDifference} days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCalculator;

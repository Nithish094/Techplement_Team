import React, { useState } from 'react';
import axios from 'axios';

const HourToMinuteSecondConverter = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const convertTime = async () => {
    const mins = hours * 60;
    const secs = hours * 3600;
    setMinutes(mins);
    setSeconds(secs);

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'Hour to Minute and Second Converter',
      Inputs: `Hours-(${hours})`,
      Outputs: `Minutes-(${mins}), Seconds-(${secs})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">Hour to Minute and Second Converter</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="hours" className="form-label">Hours:</label>
          <input
            type="number"
            className="form-control"
            id="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={convertTime}>Convert</button>
        {minutes !== null && seconds !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>Minutes: {minutes}</p>
            <p>Seconds: {seconds}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HourToMinuteSecondConverter;

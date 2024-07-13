import React, { useState } from 'react';
import axios from 'axios';

const GPACalculator = () => {
  const [courses, setCourses] = useState([{ grade: '', credit: '' }]);
  const [gpa, setGpa] = useState(null);

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: '', credit: '' }]);
  };

  const calculateGPA = async () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach(course => {
      const grade = parseFloat(course.grade);
      const credit = parseFloat(course.credit);
      totalCredits += credit;
      totalPoints += grade * credit;
    });
    const gpa = totalPoints / totalCredits;
    setGpa(gpa.toFixed(2));

    const res = await axios.post('http://localhost:3050/details/add', {
      CalculatorName: 'GPA Calculator',
      Inputs: `Courses-(${JSON.stringify(courses)})`,
      Outputs: `GPA-(${gpa.toFixed(2)})`
    });

    if (res.data.message === "Log Details Updated") {
      alert("Details added");
    }
  };

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light">
      <h2 className="text-primary fw-bold text-center mb-4">GPA Calculator</h2>
      <div className="card p-4">
        {courses.map((course, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={`grade-${index}`} className="form-label">Grade:</label>
            <input
              type="number"
              className="form-control"
              id={`grade-${index}`}
              value={course.grade}
              onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
            />
            <label htmlFor={`credit-${index}`} className="form-label mt-2">Credit Hours:</label>
            <input
              type="number"
              className="form-control"
              id={`credit-${index}`}
              value={course.credit}
              onChange={(e) => handleCourseChange(index, 'credit', e.target.value)}
            />
          </div>
        ))}
        <button className="btn btn-secondary w-100 mb-3" onClick={addCourse}>Add Course</button>
        <button className="btn btn-primary w-100" onClick={calculateGPA}>Calculate GPA</button>
        {gpa !== null && (
          <div className="mt-4 fs-5 text-success fw-bold text-center">
            <p>GPA: {gpa}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPACalculator;

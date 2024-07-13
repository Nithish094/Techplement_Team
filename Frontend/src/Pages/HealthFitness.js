import React from 'react'
import { useNavigate } from 'react-router-dom';
function HealthFitness() {
  let navigate=useNavigate();
  const cardData = [
    {
      title: 'BMI Calculator',
      path: '/BmiCalculator'
    },{
        title: 'BMR Calculator',
        path: '/BmrCalculator'
      },{
        title: 'Body Fat Calculator',
        path: '/BodyFatCalculator'
      },{
        title: 'Calorie Calculator',
        path: '/CalorieCalculator'
      },{
        title: 'IdeaWeight Calculator',
        path: '/IdeaweightCalculator'
      },
  ];
  return (
    <div className="container mt-5">
    <div className='m-2 p-3 fs-3 bg-light rounded text-center fw-bold'>HealthFitness Calculator Page</div>
  <div className="row">
    {cardData.map((card, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100" onClick={() => navigate(card.path)}>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default HealthFitness
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Conversion() {
  let navigate=useNavigate();
  const cardData = [
      {
        title: 'Age Calculator',
        path: '/AgeCalculator'
      },{
          title: 'Bill Tip Calculator',
          path: '/BillTipCalculator'
        },{
          title: 'Date Calculator',
          path: '/DateCalculator'
        },{
          title: 'GPA Calculator',
          path: '/GPACalculator'
        },{
          title: 'Height Calculator',
          path: '/HeightCalculator'
        },{
          title: 'HourToMinuteSeconds Calculator',
          path: '/HourToMinuteSecondsCalculator'
        },{
          title: 'Length Calculator',
          path: '/LengthCalculator'
        },{
          title: 'Password Generator',
          path: '/PasswordGenerator'
        },
    ];
  return (
    <div className="container mt-5">
    <div className='m-2 p-3 fs-3 bg-light rounded text-center fw-bold'>Conversion Calculator Page</div>
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

export default Conversion
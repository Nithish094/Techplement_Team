import React from 'react'
import { useNavigate } from 'react-router-dom';

function Geometric() {
  let navigate=useNavigate();
  const cardData = [
      {
        title: 'Circle Calculator',
        path: '/CircleCalculator'
      },{
          title: 'Cone Calculator',
          path: '/ConeCalculator'
        },{
          title: 'Cube Calculator',
          path: '/CubeCalculator'
        },{
          title: 'Cylinder Calculator',
          path: '/CylinderCalculator'
        },{
          title: 'Distance 2D Calculator',
          path: '/Distance2DCalculator'
        },{
          title: 'Distance 3D Calculator',
          path: '/Distance3DCalculator'
        },{
          title: 'EquilateralTriangle Calculator',
          path: '/EquilateralTriangleCalculator'
        },{
          title: 'IsoscelesTriangle Calculator',
          path: '/IsoscelesTriangleCalculator'
        },{
          title: 'RectangleTriangle Calculator',
          path: '/RectangleCalculator'
        },{
          title: 'RightAngledTriangle Calculator',
          path: '/RightAngledTriangleCalculator'
        },

    ];
  return (
    <div className="container mt-5">
        <div className='m-2 p-3 fs-3 bg-light rounded text-center fw-bold'>Geometric Calculator Page</div>
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

export default Geometric
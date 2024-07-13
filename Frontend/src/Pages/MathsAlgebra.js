import React from 'react'
import { useNavigate } from 'react-router-dom';
function MathsAlgebra() { 
  let navigate=useNavigate();
  const cardData = [
      {
        title: 'Boolean Algebra Simplifer Calculator',
        path: '/BooleanAlgebraSimplifer'
      },{
          title: 'Complex Number Calculator',
          path: '/ComplexNumberCalculator'
        },{
          title: 'Factorization Calculator',
          path: '/FactorizationCalculator'
        },{
          title: 'Flowrate Calculator',
          path: '/FlowRateCalculator'
        },{
          title: 'Impulse Calculator',
          path: '/ImpulseCalculator'
        },{
          title: 'Inequality Calculator',
          path: '/InequalityCalculator'
        },{
          title: 'Partial Fraction Decomposer Calculator',
          path: '/PartialFractionDecomposerCalculator'
        },{
          title: 'Percentage Calculator',
          path: '/PercentageCalculator'
        },

    ];
  return (
    <div className="container mt-5">
    <div className='m-2 p-3 fs-3 bg-light rounded text-center fw-bold'>MathsAlgebra Calculator Page</div>
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

export default MathsAlgebra;
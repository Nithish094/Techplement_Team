import React from 'react'
import { useNavigate } from 'react-router-dom';

function FinancialPage() {
    let navigate=useNavigate();
    const cardData = [
        {
          title: 'Simple Intrest Calculator',
          path: '/SimpleIntrestCalculator'
        },{
            title: 'Compound Intrest Calculator',
            path: '/CompoundIntrestCalculator'
          },{
            title: 'Currency Calculator',
            path: '/CurrencyCalculator'
          },{
            title: 'Salary Calculator',
            path: '/SalaryCalculator'
          },{
            title: 'Investment Calculator',
            path: '/InvestmentCalculator'
          },{
            title: 'Retriment Calculator',
            path: '/RetrimentCalculator'
          },{
            title: 'Sales&Tax Calculator',
            path: '/Sales&TaxCalculator'
          },
      ];
  return (
    <div className="container mt-5">
        <div className='m-2 p-3 fs-3 bg-light rounded text-center fw-bold'>Financial Calculator Page</div>
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

export default FinancialPage
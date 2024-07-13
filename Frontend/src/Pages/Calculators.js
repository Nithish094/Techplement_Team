import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Calculators() {
  const cardData = [
    {
      title: 'Financial Calculators',
      description: 'Tools to manage your finances.',
      path: '/financial',
      image: 'https://mycreditunion.gov/sites/default/files/styles/to_webp/public/toolkit-graphics/fin-resources_toolbox.jpg.webp?itok=pFMBvuE4'
    },
    {
      title: 'Health & Fitness Calculators',
      description: 'Track your health and fitness metrics.',
      path: '/healthFitness',
      image: 'https://health-calculators.net/wp-content/uploads/2024/02/BMI_Calculator.png'
    },
    {
      title: 'Conversion Calculator',
      description: 'Convert units from one to another.',
      path: '/conversion',
      image: 'https://math-media.byjusfutureschool.com/bfs-math/2022/12/13104033/Asset-1-1-1.png'
    },
    {
      title: 'Geometric Calculator',
      description: 'Calculate geometric shapes and properties.',
      path: '/geometric',
      image: 'https://p-library.com/wp-content/uploads/2020/06/Feature-2-1024x500.png'
    },
    {
      title: 'Maths & Algebra',
      description: 'Solve mathematical and algebraic problems.',
      path: '/maths-algebra',
      image: 'https://c8.alamy.com/comp/G3BHCH/calculator-and-mathematical-symbols-isolated-on-white-background-3d-G3BHCH.jpg'
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card h-100 shadow-sm">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <Link to={card.path} className="btn btn-primary mt-auto">Go To</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculators;

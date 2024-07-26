import React from 'react';
import Campaign from '../../../assests/image/campaign2.png';
import './ProductConsultency.css';

const ProductConsultency = () => {
  return (
    <div className="product-consultency">
        <div className="product-consultency-image">
        <img src={Campaign} alt="Team Meeting" />
      </div>
      <div className="product-consultency-content">
        <h1>Consulting Services</h1>
        <p>
          Today's business needs partners who can talk about the strategy and technology in the same conversation.
          At Ira, we believe true value from technology requires an in-depth understanding of business strategy.
        </p>
        <ul>
          <li>✓ Technology Consulting</li>
          <li>✓ Business Consulting</li>
          <li>✓ Quality Consulting</li>
          <li>✓ Process Consulting</li>
        </ul>
        <button>Learn More</button>
      </div>
     
    </div>
  );
};

export default ProductConsultency;

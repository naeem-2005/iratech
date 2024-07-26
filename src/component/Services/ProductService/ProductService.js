import React from 'react';
import ProductImg from '../../../assests/image/Productimg.png';
import './ProductService.css';


const ProductService = () => {
  return (
    <div className="product-service-container">
      <div className="product-service-content">
        <h1>Product Engineering and Services</h1>
        <p>
          Ira's product development service covers the entire spectrum of activities involved in taking a product from vision to ship.
        </p>
        <ul>
          <li>✓ Identify the technical and feasibility challenges early enabling to think alternative approaches.</li>
          <li>✓ Client can seek feedback from their end customers so that prioritization of features and their usefulness in overall product perspective is established.</li>
          <li>✓ Security measures are being taken upfront starting from architecture and intermediate releases are being verified that those measures are really in place.</li>
        </ul>
        <button>Learn More</button>
      </div>
      <div className="product-service-image">
        <img src={ProductImg} alt="Team working together in an office" />
      </div>
      
    </div>
  );
};

export default ProductService;

import React from 'react';
import './HeaderAbout.css';
import cofounder from '../../../assests/image/Ceo.png';

import founder from '../../../assests/image/leader.png';

import productManager from '../../../assests/image/Product-Manager2.jpg';


const teamMembers = [
  {
    name: 'Gaurav Vrati',
    role: 'Co-Founder & Chief Executive Officer',
    imgSrc: cofounder,
  },
  {
    name: 'Mahesh',
    role: 'Head Of Technology',
    imgSrc: founder,
  },
  {
    name: 'Shikhar Gupta',
    role: 'Product Manager',
    imgSrc: productManager,
  },
];

const HeaderAbout = () => {
  return (
    <>
      <div className="container">
        <div className="section-container">
          <h1>About Us</h1>
          <p>
            Ira Technologies India Pvt Ltd is an engineering and R&D services company that specializes in providing customized solutions to startups and businesses of all sizes.
            With a deep understanding of the unique challenges that startups face in the technology landscape, we work closely with our clients to develop innovative and cutting-edge solutions that help them stay ahead of the competition.
          </p>
        </div>
      </div>
      <div className="container2">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.imgSrc} alt={member.name} className="card-image" />
            <h2 className="card-name">{member.name}</h2>
            <p className="card-role">{member.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderAbout;

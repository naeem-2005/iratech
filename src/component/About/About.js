import React from 'react';
import HeaderAbout from './HeaderAbout/HeaderAbout';

import AboutUsImg from '../../assests/image/office.png';
import './About.css';


const About = () => {
  return (
    <div>
       <HeaderAbout/>
        <section className="about-us">
      
          <div className="about-us-content">
            <img
                src={AboutUsImg}
              alt="About Us"
              className="about-us-image"
            />
            <div className="about-us-text">
              <h3>OUR History</h3>
              <p>
              Ira Technologies India Pvt Ltd is an engineering and R&D services company that specializes in providing customized solutions to startups and businesses of all sizes.
              With a deep understanding of the unique challenges that startups face in the technology landscape, we work closely with our clients to develop innovative and cutting-edge solutions that help them stay ahead of the competition.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;

import React from 'react';

import RetailImg from '../../../assests/image/Retail.png'; 
import FinanceImg from '../../../assests/image/Finance.png'; 
import CyberSecurityImg from '../../../assests/image/CyberSecurity.png'; 
import DataScienceImg from '../../../assests/image/DataScience.png';
import EducationImg from '../../../assests/image/Education.png';
import HealthImg from '../../../assests/image/Healthcare.png';
import PerryImg from '../../../assests/image/Perry.png';
import PennyImg from '../../../assests/image/penny.jpeg';
import KimImg from '../../../assests/image/kim-adele.jpeg';
import './DomainWork.css';

const domains = [
  { img: RetailImg, title: 'Retail', description: 'Retail services for a customer-centric shopping experience.' },
  { img: FinanceImg, title: 'Finance', description: 'Customized financial solutions addressing market and regulatory needs.' },
  { img: CyberSecurityImg, title: 'CyberSecurity', description: 'Prevent unauthorized access and ensure information security.' },
  { img: DataScienceImg, title: 'Data Science', description: 'Tailored software for evolving customer needs and business goals.' },
  { img: EducationImg, title: 'Education', description: 'eLearning solutions with scalable design and emphasis on learning outcomes.' },
  { img: HealthImg, title: 'Healthcare', description: 'Software solutions for hassle-free patient diagnosis and record maintenance.' },
];

const quickFacts = [
  { number: '20+', text: 'Projects' },
  { number: '15+', text: 'End-to-end project execution' },
  { number: '5M+', text: 'Value delivered' },
];

const testimonials = [
  {
    text: '“I developed a great partnership with Ira Technologies. Their dedication to our project was apparent in all its verticals.”',
    img: PerryImg,
    name: 'Perry Simpson',
    position: 'Specialist at One Page Capture Limited'
  },
  {
    text: '“I value their ingenious approach towards building our project. Ira Technologies follows an intuitive approach towards product development. They have a well-organized support system, which provides steady assistance.”',
    img: PennyImg,
    name: 'Penny Power OBE'
  },
  {
    text: '“I appreciate the creativity and guidance provided by Ira Technologies. They accounted for the most granular details and helped in building a well-designed system.”',
    img: KimImg,
    name: 'Kim-adele Platts'
  }
];

const DomainWork = () => {
  return (
    <div>
      <section className="domains-we-work">
        <h2>Domains We Work</h2>
        <div className="domains-container">
          {domains.map((domain, index) => (
            <div key={index} className="domain-card">
              <img src={domain.img} alt={domain.title} />
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-facts">
      <h2>Quick Facts</h2>
      <p>Everything you need to convert, engage, and retain more users</p>
      <div className="facts">
        {quickFacts.map((fact, index) => (
          <div key={index} className="fact-item">
            <h3>{fact.number}</h3>
            <p>{fact.text}</p>
          </div>
          ))}
        </div>
      </section>

    <section className="testimonial">
       <h2>What Our Clients Say</h2>
      <div className="profiles-container">
        {testimonials.map((testimonial, index) => (
           <div key={index} className="profile">
            <p>{testimonial.text}</p>
            <div className="profile-img-container">
            <img src={testimonial.img} alt={testimonial.name} />
             </div>
            <div>
             <h3>{testimonial.name}</h3>
               {testimonial.position && <p>{testimonial.position}</p>}
          </div>
        </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DomainWork;

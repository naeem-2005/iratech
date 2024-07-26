import React from 'react';
import './Features.css';
import CommunicationImg from '../../../assests/image/communication.png';
import SecurityImg from '../../../assests/image/Security.jpg';
import DataAnalystImg from '../../../assests/image/Data-Analyst.png'
import CollaborationImg from '../../../assests/image/Collaboration.jpg';

import customerSupportImg from '../../../assests/image/customerSupport.jpg'
import  cloudComputingImg from '../../../assests/image/cloudComputing.png'
import aiImg from '../../../assests/image/ai.png'
import iotImg from '../../../assests/image/iot.png'





const featuresData = [
 
      {
      imgSrc: CommunicationImg,
      title: 'Communications',
      description: 'At Ira Technologies, we understand that communication is the cornerstone of every successful business. Our communication solutions are designed to streamline and enhance the way you connect with your stakeholders, ensuring clear and effective interactions across all levels of your organization.',
    },
    {
      imgSrc: CollaborationImg,
      title: 'Collaboration',
      description: 'At Ira Technologies, we believe that collaboration is the cornerstone of innovation and success. Our advanced collaboration solutions are designed to facilitate seamless communication and cooperation within your organization, driving efficiency and productivity through integrated tools and platforms.',
    },
    {
      imgSrc: DataAnalystImg,
      title: 'Data Analysis',
      description: 'At Ira Technologies, our data analysis solutions empower businesses to make informed decisions by providing deep insights and actionable intelligence from complex data sets. Our expertise ensures that you gain a comprehensive understanding of your data to drive strategic growth and operational efficiency.',
    },
    {
      imgSrc: SecurityImg,
      title: 'Security',
      description: 'At Ira Technologies, we prioritize your data and system security with cutting-edge solutions that protect against threats and vulnerabilities. Our comprehensive security measures are designed to safeguard your assets, ensuring the integrity and confidentiality of your information in a constantly evolving digital landscape.',
    },
    {
      imgSrc: customerSupportImg,
      title: 'Customer Support',
      description: 'At Ira Technologies, we are committed to providing exceptional customer support that enhances your experience and resolves your concerns efficiently. Our dedicated support team is available around the clock to assist with any issues, ensuring a seamless and satisfying user experience.',
    },
    {
      imgSrc: cloudComputingImg,
      title: 'Cloud Computing',
      description: 'At Ira Technologies, our cloud computing solutions offer scalable and flexible resources that adapt to your business needs. By leveraging cloud technology, we enable you to optimize performance, reduce costs, and enhance collaboration across your organization with secure and reliable cloud services.',
    },
    {
      imgSrc: aiImg,
      title: 'Artificial Intelligence',
      description: 'At Ira Technologies, we harness the power of artificial intelligence to drive innovation and automation in your business processes. Our AI solutions are designed to enhance decision-making, improve operational efficiency, and deliver personalized experiences through advanced machine learning and intelligent algorithms.',
    },
    {
      imgSrc: iotImg,
      title: 'Internet of Things',
      description: 'At Ira Technologies, we connect the physical and digital worlds with our Internet of Things (IoT) solutions. By integrating smart devices and sensors, we enable real-time data collection and analysis, enhancing operational efficiency and providing actionable insights for informed decision-making.',
    },
  ];
  

const Feature = ({ imgSrc, title, description }) => (
  <div className="feature">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => (
  <div className="features-container">
    <h2 className="features-heading">Our Features & Services</h2>
    <div className="features-grid">
      {featuresData.map((feature, index) => (
        <Feature
          key={index}
          imgSrc={feature.imgSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
);

export default Features;

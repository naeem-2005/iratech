import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCogs, faCode, faWrench, faLaptopCode, faTv, faHeartbeat, faIndustry, faShoppingCart, faDollarSign, faCloud, faDatabase, faMobileAlt, faRobot } from '@fortawesome/free-solid-svg-icons';
import ProductService from './ProductService/ProductService';
import ProductConsultency from './ProductService/ProductConsultency';

const Services = () => {
  const services = [
    {
      icon: faChartLine, 
      title: 'Technology Consulting',
      description: 'Expert guidance to help your business leverage technology effectively, solve complex challenges, and drive innovation.',
    },
    {
      icon: faCogs,
      title: 'Product and Platform Engineering Services',
      description: 'End-to-end engineering services for product development and platform design, ensuring robust, scalable, and high-performance solutions.',
    },
    {
      icon: faCode,
      title: 'Application Development',
      description: 'Custom application development services tailored to your specific needs, using the latest technologies to build functional and user-friendly applications.',
    },
    {
      icon: faWrench, 
      title: 'Application Maintenance',
      description: 'Ongoing support and maintenance services to ensure your applications remain up-to-date, secure, and fully functional.',
    },
    {
      icon: faChartLine,
      title: 'QA/Testing & Automation RPA',
      description: 'Comprehensive QA and testing services, including automation and Robotic Process Automation (RPA) to enhance the quality and efficiency of your processes.',
    },
    {
      icon: faLaptopCode,
      title: 'Hi-Tech',
      description: 'Innovative technology solutions and high-tech systems to keep your business at the forefront of technological advancements.',
    },
    {
      icon: faTv,
      title: 'Consumer Electronics',
      description: 'Cutting-edge consumer electronics solutions designed to meet the needs of today’s tech-savvy consumers.',
    },
    {
      icon: faHeartbeat,
      title: 'Medical Devices',
      description: 'State-of-the-art medical devices that improve patient care and streamline healthcare operations.',
    },
    {
      icon: faIndustry,
      title: 'Manufacturing',
      description: 'Advanced manufacturing solutions that enhance efficiency, productivity, and quality in production processes.',
    },
    {
      icon: faShoppingCart,
      title: 'Online Services',
      description: 'Comprehensive online services including e-commerce solutions, digital marketing, and web development.',
    },
    {
      icon: faDollarSign,
      title: 'Financial Services',
      description: 'Robust financial services and solutions tailored to support the diverse needs of financial institutions and businesses.',
    },
    {
      icon: faRobot,
      title: 'Smart Solutions (IoT)',
      description: 'Innovative IoT solutions that connect devices, gather data, and provide actionable insights to drive efficiency and automation.',
    },
    {
      icon: faCloud,
      title: 'Cloud',
      description: 'Cloud services that offer scalable storage, computing power, and applications to enhance business agility and performance.',
    },
    {
      icon: faDatabase,
      title: 'Big Data Center',
      description: 'Advanced big data solutions for managing and analyzing large volumes of data to gain valuable insights and drive decision-making.',
    },
    {
      icon: faMobileAlt,
      title: 'Mobile and Web',
      description: 'Development and optimization of mobile and web applications to deliver seamless user experiences across all platforms.',
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <FontAwesomeIcon icon={service.icon} className="service-icon" /> 
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <ProductService/>
      <ProductConsultency/>
    </div>
  );
};

export default Services;

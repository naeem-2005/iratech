import React from 'react'
import Hero from '../../component/Home/Hero/Hero'

import Features from '../../component/Home/Features/Features';
import HeaderAbout from '../../component/About/HeaderAbout/HeaderAbout'
import  ProductService from '../../component/Services/ProductService/ProductService'
import ProductConsultency from '../../component/Services/ProductService/ProductConsultency';
import Home from '../../component/Home/Home';
import DomainWork from '../../component/Home/Domain/DomainWork';
import ContactForm from '../../component/Contact/Contactform/ContactForm';

const HomePages = () => {
  return (
    <>
     <Hero/>
     <Features/>
     <HeaderAbout/>
     < ProductService/>
    <ProductConsultency/>
    <Home/>
    <DomainWork/>
    <ContactForm/>
      
    </>
  )
}

export default HomePages

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import HomePage from './Pages/Home/HomePages';
import AboutPage from './Pages/Aboutus/AboutUsPages';
import ServicesPage from './Pages/Services/ServicesPages';
import ContactPage from './Pages/Contact/ContactPages';

import FooterComponent from './component/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;

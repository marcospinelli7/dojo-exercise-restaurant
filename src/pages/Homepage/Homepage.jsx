import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'
//components
import { AboutSection, Hero, ServiceCard } from '../../components';

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="service-section">
        <ServiceCard 
          icon="/logo.svg"
          title="Master Chefs"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="Quality Food"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="Online Order"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="24/7 Service"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />     
      </div>
    </>
  )
}

export default Homepage
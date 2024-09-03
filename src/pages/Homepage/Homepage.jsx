import React from 'react';
import { Link } from 'react-router-dom';
//components
import { Hero, ServiceCard } from '../../components';

const Homepage = () => {
  return (
    <>
      <Hero />
      <h1>TEST</h1>
      <ServiceCard 
        icon="/logo.svg"
        title="Title"
        description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
      />
    </>
  )
}

export default Homepage
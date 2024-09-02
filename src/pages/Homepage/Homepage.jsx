import React from 'react';
import { Link } from 'react-router-dom';
//components
import { Hero } from '../../components';

const Homepage = () => {
  return (
    <>
      <Hero />
      <h1>TEST</h1>
      <Link to="/about">LINK</Link>
    </>
  )
}

export default Homepage
import React from 'react'
//components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
//style

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
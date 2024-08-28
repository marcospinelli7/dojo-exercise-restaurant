import React from 'react'
//components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
//style

const PageLayout = () => {
  return (
    <>
      <Navbar />
      {/* for children elements between the navbar and footer */}
      <Outlet />
      <Footer />
    </>
  )
}

export default PageLayout
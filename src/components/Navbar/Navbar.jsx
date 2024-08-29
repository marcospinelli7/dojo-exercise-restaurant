import React, { useState }from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => { 

  const [isNavOpen, setIsNavOpen] = useState(true);

  const ToogleResponsiveNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className='navbar-container'>
      <div className="navbar-title">
        <img src="./assets/icons/logo.svg" alt="nav_img"/>
        <h1>Restoran</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link className="nav-item" to="/">Home</Link></li>
          <li><Link className="nav-item" to="/">About</Link></li>
          <li><Link className="nav-item" to="/">Service</Link></li>
          <li><Link className="nav-item" to="/">Menu</Link></li>
          <li><Link className="nav-item" to="/">Pages</Link></li>
          <li><Link className="nav-item" to="/">Contact</Link></li>
        </ul>
        <Link
          className="action-btn">
            Book a table
        </Link>
      </div>
      <div onClick={ToogleResponsiveNav} className="menu-icon">
        <img src="./assets/icons/list.svg" alt="menu_img" />
      </div>

      {/* Mobile Nav */}
      {!isNavOpen ? (
              <div className="navbar-responsive-links">
              <ul>
                <li><Link className="nav-item" to="/">Home</Link></li>
                <li><Link className="nav-item" to="/">About</Link></li>
                <li><Link className="nav-item" to="/">Service</Link></li>
                <li><Link className="nav-item" to="/">Menu</Link></li>
                <li><Link className="nav-item" to="/">Pages</Link></li>
                <li><Link className="nav-item" to="/">Contact</Link></li>
              </ul>
              <Link
                className="action-btn mb-16">
                  Book a table
              </Link>
            </div>
      ) : ""}
    </div>
  )
}

export default Navbar
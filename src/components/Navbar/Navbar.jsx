import React, { useState }from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => { 

  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const ToogleResponsiveNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  const toogleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
          <li>
            <div className="navbar-dropdown" onMouseEnter={() => { setIsDropdownOpen(false)}} onMouseLeave={() => { 
            setTimeout(() => {
              setIsDropdownOpen(true)
            }, 3000)}}>
              <div className='nav-title nav-item'>
                <p>PAGES</p>
                <img src="./assets/icons/caret-down-fill.svg" alt="dropdown_icon" />
              </div>
              {!isDropdownOpen ? (
                <div className="dropdown">
                <Link className="nav-item" to="/">Booking</Link>
                <Link className="nav-item" to="/">Our Team</Link>
                <Link className="nav-item" to="/">Testimonial</Link>
                </div>
              ) : ""}
            </div>
          </li>
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
                <li>
                  <div className="navbar-dropdown" onClick={toogleDropdown}>
                    <div className='nav-title nav-item'>
                      <p>pages</p>
                      <img src="./assets/icons/caret-down-fill.svg" alt="dropdown_icon" />
                    </div>
                    {!isDropdownOpen ? (
                      <div className="dropdown">
                      <Link className="nav-item" to="/">Booking</Link>
                      <Link className="nav-item" to="/">Our Team</Link>
                      <Link className="nav-item" to="/">Testimonial</Link>
                      </div>
                    ) : ""}
                  </div>  
                </li>
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
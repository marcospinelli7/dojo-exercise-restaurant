import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-section">
          <p className='title'>Company ---- </p>
          <div className="link-item">
            <img src="./assets/icons/right-arrow.svg" alt="right_arrow" />
            <p>About us</p>
          </div>
          <div className="link-item">
            <img src="./assets/icons/right-arrow.svg" alt="right_arrow" />
            <p>Contact us</p>
          </div>
          <div className="link-item">
            <img src="./assets/icons/right-arrow.svg" alt="right_arrow" />
            <p>Reservation</p>
          </div>
          <div className="link-item">
            <img src="./assets/icons/right-arrow.svg" alt="right_arrow" />
            <p>Privacy Policy</p>
          </div>
          <div className="link-item">
            <img src="./assets/icons/right-arrow.svg" alt="right_arrow" />
            <p>Terms & Condition</p>
          </div>
        </div>
        <div className="footer-section">
          <p className='title'>Contact ---- </p>
          <div className="contact-item">
            <img src="./assets/icons/geo.svg" alt="right_arrow" />
            <p>123 Street, New York, USA</p>
          </div>
          <div className="contact-item">
            <img src="./assets/icons/telephone.svg" alt="right_arrow" />
            <p>+012 345 67890</p>
          </div>
          <div className="contact-item">
            <img src="./assets/icons/envelope.svg" alt="right_arrow" />
            <p>info@example.com</p>
          </div>
          <div className="social-item">
            <a href="#">
            <img src="./assets/icons/twitter.svg" alt="social_icon" />
            </a>
            <a href="#">
            <img src="./assets/icons/facebook.svg" alt="social_icon" />
              </a>
              <a href="#">
            <img src="./assets/icons/youtube.svg" alt="social_icon" />
              </a>
              <a href="#">
            <img src="./assets/icons/linkedin.svg" alt="social_icon" />
              </a>
          </div>
        </div>
        <div className="footer-section">
          <p className='title'>Opening ---- </p>
          <div className="opening-item">
            <p style={{fontSize: "20px", fontWeight: 700}}>Monday - Saturday</p>
            <p>09AM - 09PM</p>
          </div>
          <div className="opening-item">
            <p style={{fontSize: "20px", fontWeight: 700 }}>Sunday</p>
            <p>10AM - 08PM</p>
          </div>
        </div>
        <div className="footer-section">
          <p className='title'>Newsletter ---- </p>
          <div className="newsletter-item">
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <input type="text" placeholder='Your Email'/>
            {/* <button>Sign Up</button> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='copyright'>
          <p>made with ♥ by a nerdy guy with math issues</p>
          <p>Distributed By ThemeWagon</p>
        </div>
        <div className='other-links'>
          <a href="#">Home</a>
          <a href="#">Cookies</a>
          <a href="#">Help</a>
          <a href="#">FQAs</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
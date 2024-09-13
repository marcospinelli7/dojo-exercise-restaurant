import React from 'react'
import { HeroSection, SectionTitle } from '../../components'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
        <HeroSection 
          pageTitle="Contact Us"
          pagePath="contact"
        />
        <SectionTitle 
          sectionName="Contact Us"
          sectionTitle="Contact For Any Query"
        />
        <div className='contact-section-container responsive-padding'>
          <div className="contact-section-info">
            <div className="info-element">
              <h3>Booking <span className='text-line'></span></h3>
              <div>
                <img src="./assets/icons/logo.svg" alt="info_icon" />
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-element">
              <h3>General <span className='text-line'></span></h3>
              <div>
                <img src="./assets/icons/logo.svg" alt="info_icon" />
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-element">
              <h3>Technical <span className='text-line'></span></h3>
              <div>
                <img src="./assets/icons/logo.svg" alt="info_icon" />
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="contact-section-content">
          <div className="left">
            <iframe width="100%" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=9.16062355041504%2C45.44062178055123%2C9.205942153930666%2C45.48619212538591&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe><br/><small><a href="https://www.openstreetmap.org/#map=14/45.46341/9.18328">Visualizza mappa ingrandita</a></small>
          </div>
          <div className="right">
            <div className='contain'>
              <input type="text" placeholder='Your Name'/>
              <input type="email" placeholder='Your Email'/>
            </div>
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Message'></textarea>
            <div className='contact-btn'>SEND</div>
          </div>
          </div>
        </div>
    </> 
  )
}

export default ContactPage
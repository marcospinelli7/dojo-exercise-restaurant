import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className='about-section-container responsive-padding'>
        <div className="left">
            <div className="first">
                <img src="./assets/about-1.jpg" alt="about_img" />
            </div>
            <div className="second">
                <img className="second" src="./assets/about-2.jpg" alt="about_img" />
            </div>
            <div className="third">
                <img src="./assets/about-3.jpg" alt="about_img" />
            </div>
            <div className="fourth">
                <img className="fourth" src="./assets/about-4.jpg" alt="about_img" />
            </div>
        </div>
        <div className="right">
            <p className="section-name">About Us <span className='text-line'></span></p>
            <div className="section-title">
                Welcome to  
                <img src="./assets/icons/logo.svg" alt="logo_img" />
                Restoran
            </div>
            <p className='description'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                <br />
                <br />
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="stats">
                <div className="stat-element">
                    <p className='num'>15</p>
                    <p>
                        Years of 
                        <br />
                        <span>experience</span>
                    </p>
                </div>
                <div className="stat-element">
                    <p className='num'>50</p>
                    <p>
                        Popular
                        <br />
                        <span>master chefs</span>
                    </p>
                </div>
            </div>
            <div className="read-more-btn">
                Read More
            </div>
        </div>
    </div>
  )
}

export default AboutSection
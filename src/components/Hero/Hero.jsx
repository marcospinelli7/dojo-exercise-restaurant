import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="right-section">
        <h1>Enjoy Our <br /> Delicious Meal</h1>
        <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
        </p>
        <Link className="hero-btn" to="/">Book a table</Link>
      </div>
      <div className="left-section">
        <img src="./assets/hero.png" alt="hero_img" />
      </div>
    </div>
  )
}

export default Hero
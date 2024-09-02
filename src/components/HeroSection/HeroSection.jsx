import React from 'react'
import './HeroSection.css'

const HeroSection = ({ pageTitle, pagePath}) => {
  return (
    <div className='hero-section-container'>
        <div className='content'>
            <p className='content-title'>{pageTitle}</p>
            <p className='content-paths'>
                <span className='yellow'>
                    home
                </span>
                <span className='grey'>
                    /
                </span>
                <span className='yellow'>
                    pages
                </span>
                <span className='grey'>
                    /
                </span>
                <span>
                    {pagePath}
                </span>
                
            </p>
        </div>
    </div>
  )
}

export default HeroSection
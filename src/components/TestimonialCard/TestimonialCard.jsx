import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = ({ img }) => {
  return (
    <div className='testimonial-card-container'>
        <img className="icon" src="./assets/icons/logo.svg" alt="testimonial_icon" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className='user'>
            <img src={`./assets/testimonial-${img}.jpg`} alt="testimonial_img" />
            <div>
                <h3>Client Name</h3>
                <p>Profession</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
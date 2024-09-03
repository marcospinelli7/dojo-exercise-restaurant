import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ icon, title, description}) => {
  return (
    <div className='service-card-container'>
        <img src={`./assets/icons/${icon}`} alt="service-icon" />
        <p className='title'>{title}</p>
        <p className='description'>
        {description}
        </p>
    </div>
  )
}

export default ServiceCard
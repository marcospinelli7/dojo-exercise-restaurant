import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ sectionName, sectionTitle }) => {
  return (
    <div className='section-title-container'>
        <p className="section-name">
            <span className='text-line'></span>
            {sectionName}
            <span className='text-line'></span>
        </p>
        <p className="section-title">{sectionTitle}</p>
    </div>
  )
}

export default SectionTitle
import React from 'react'
import './TeamCard.css'

const TeamCard = ({ img }) => {
  return (
    <div className='team-card-container'>
      <img src={`./assets/team-${img}.jpg`} alt="team_img" />
      <h3>Full Name</h3>
      <p>Designation</p>
      <div className="social">
        <img src="./assets/icons/facebook.svg" alt="social_icon" />
        <img src="./assets/icons/twitter.svg" alt="social_icon" />
        <img src="./assets/icons/linkedin.svg" alt="social_icon" />
      </div>
    </div>
  )
}

export default TeamCard
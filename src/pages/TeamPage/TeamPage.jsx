import React from 'react'
import { HeroSection, TeamCard } from '../../components'
import './TeamPage.css'

const TeamPage = () => {
  return (
    <>
        <HeroSection 
            pageTitle="Our Team"
            pagePath="team"
        />
      <div className="team-section responsive-padding">
        <TeamCard img="1"/>
        <TeamCard img="2"/>
        <TeamCard img="3"/>
        <TeamCard img="4"/>
        <TeamCard img="1"/>
        <TeamCard img="2"/>
        <TeamCard img="3"/>
        <TeamCard img="4"/>

      </div>

    </>
  )
}

export default TeamPage
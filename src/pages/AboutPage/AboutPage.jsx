import React from 'react'
import { AboutSection, HeroSection, TeamCard } from '../../components'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <>
      <HeroSection 
        pageTitle="About Us"
        pagePath="about"
      />
      <AboutSection />
      <div className="team-section responsive-padding">
        <TeamCard img="1"/>
        <TeamCard img="2"/>
        <TeamCard img="3"/>
        <TeamCard img="4"/>
      </div>
    </>
  )
}

export default AboutPage
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'
//components
import { AboutSection, BookingSection, Hero, MenuSection, SectionTitle, ServiceCard, TeamCard, TestimonialSection } from '../../components';

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="service-section responsive-padding">
        <ServiceCard 
          icon="/logo.svg"
          title="Master Chefs"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="Quality Food"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="Online Order"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />
        <ServiceCard 
          icon="/logo.svg"
          title="24/7 Service"
          description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        />     
      </div>
      <AboutSection />
      <SectionTitle
        sectionName="Food Menu"
        sectionTitle="Most Popular Items"
      />
      <MenuSection />
      <BookingSection />
      <SectionTitle
        sectionName="Team Members"
        sectionTitle="Our Master Chefs"
      />
      <div className="team-section responsive-padding">
      <TeamCard img="1"/>
      <TeamCard img="2"/>
      <TeamCard img="3"/>
      <TeamCard img="4"/>
      </div>
      <SectionTitle
        sectionName="Testimonial"
        sectionTitle="Our Clients Say!!!"
      />
      <TestimonialSection />
    </>
  )
}

export default Homepage
import React from 'react'
import { HeroSection, ServiceCard } from '../../components'
import './ServicePage.css'

const ServicePage = () => {
  return (
    <>
      <HeroSection 
          pageTitle="Services"
          pagePath="service"
      />
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
    </> 
    
  )
}

export default ServicePage
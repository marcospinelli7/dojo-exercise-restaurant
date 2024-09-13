import React from 'react'
import { BookingSection, HeroSection } from '../../components'

const BookingPage = () => {
  return (
    <>
      <HeroSection 
          pageTitle="Booking"
          pagePath="booking"
      />
      <BookingSection />
    </> 
  )
}

export default BookingPage
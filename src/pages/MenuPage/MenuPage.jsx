import React from 'react'
import { HeroSection, MenuSection } from '../../components'

const MenuPage = () => {
  return (
    <>
        <HeroSection 
            pageTitle="Food Menu"
            pagePath="menu"
        />
        <MenuSection />
    </> 
  )
}

export default MenuPage
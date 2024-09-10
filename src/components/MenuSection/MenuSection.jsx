import React, { useState, useEffect } from 'react'
import './MenuSection.css'


const MenuSection = () => {
  const [ menuType, setMenuType ] = useState(1);

  const toogleMenuType = (n) => {
    setMenuType(n)
  }
  
  const toogleActive = (e) => {
    const currTarget = e.currentTarget;   
    document.querySelectorAll('.selector').forEach( btn => 
    btn.classList.remove('active'))
    e.classList.add('active');
  }

  return (
    <div className='menu-section-container'>
       <div className="menu-section-selector">
        <div className="selector active" 
        onClick={() => {
            toogleMenuType(1);
        }}>
            <img src="./assets/icons/logo.svg" alt="selector_icon" />
            <p>
                Popular
                <br />
                <span>Breakfast</span> 
            </p>
        </div>
        <div className="selector" 
        onClick={() => {
            toogleMenuType(2);
        }}
        >
            <img src="./assets/icons/logo.svg" alt="selector_icon" />
            <p>
                Special
                <br />
                <span>Launch</span>
            </p>
        </div>
        <div className="selector" 
        onClick={() => {
            toogleMenuType(3);
        }}>
            <img src="./assets/icons/logo.svg" alt="selector_icon" />
            <p>
                Lovely
                <br />
                <span>Dinner</span>
            </p>
        </div>
       </div>
       <div className="menu-items">
            {menuType === 1 ? (
                <div className="item">
                    First section
                </div>
            ) : ""}
            {menuType === 2 ? (
                <div className="item">
                    Second section
                </div>
            ) : ""}
            {menuType === 3 ? (
                <div className="item">
                    Third section
                </div>
            ) : ""}
       </div>
    </div>
  )
}

export default MenuSection
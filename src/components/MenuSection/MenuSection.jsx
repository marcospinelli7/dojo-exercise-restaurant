import React, { useState, useEffect } from 'react'
import './MenuSection.css'


const MenuSection = () => {
    const [ menuType, setMenuType ] = useState(1);
    const [ apiData, setApiData ] = useState({
        pizzas: [],
        drinks: [],
        lunch: []
    });

    useEffect(() => {
        fetch("https://private-anon-5f0f608723-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank", {
        method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const pizzas = data.filter((item) => {
                if (item.category === "Pizza") {
                    return item
                }
            })
            const drinks = data.filter((item) => {
                if (item.category === "Dryck") {
                    return item
                }
            })
            const lunch = data.filter((item) => {
                if (item.category === "Tillbehör") {
                    return item
                }
            })
            setApiData({ pizzas: pizzas, drinks: drinks, lunch: lunch})
        })
        .catch((error) => console.log(error));
    }, [])

  const toogleMenuType = (n) => {
    setMenuType(n);
  }

  const toogleActive = (e) => {
    const currTarget = e.currentTarget;   
    console.log(currTarget);
    document.querySelectorAll('.selector').forEach( btn => 
    btn.classList.remove('active'))
    currTarget.classList.add('active')
  }

  return (
    <div className='menu-section-container responsive-padding'>
       <div className="menu-section-selector">
        <div className="selector active" 
        onClick={(e) => {
            document.querySelectorAll('.selector').forEach( btn => 
            btn.classList.remove('active'))
            e.currentTarget.classList.add("active")
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
        onClick={(e) => {
            document.querySelectorAll('.selector').forEach( btn => 
            btn.classList.remove('active'))
            e.currentTarget.classList.add("active")
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
        onClick={(e) => {
            document.querySelectorAll('.selector').forEach( btn => 
            btn.classList.remove('active'))
            e.currentTarget.classList.add("active")
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
                apiData.pizzas.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>{item.price}€</p>
                            </div>
                            {item.topping ? ( 
                                <p className='item-desc'>{item.topping.reduce((a, b) => { return a + ", " + b})}</p>
                            ) : ""}
                        </div>
                    )
                })
            ) : "" }
            {menuType === 2 ? (
                apiData.drinks.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>{item.price}€</p>
                            </div>
                            {item.topping ? ( 
                                <p className='item-desc'>{item.topping.reduce((a, b) => { return a + ", " + b})}</p>
                            ) : ""}
                        </div>
                    )
                })            
            ) : ""}
            {menuType === 3 ? (
                apiData.lunch.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>{item.price}€</p>
                            </div>
                            {item.topping ? ( 
                                <p className='item-desc'>{item.topping.reduce((a, b) => { return a + ", " + b})}</p>
                            ) : ""}
                        </div>
                    )
                })
            ) : ""}
       </div>
    </div>
  )
}

export default MenuSection
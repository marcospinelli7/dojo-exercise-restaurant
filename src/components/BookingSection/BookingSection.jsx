import React, { useState } from 'react'
import './BookingSection.css'

const BookingSection = () => {
  const [ modal, setModal ] = useState(false);

  const toogleModal = () => {
    setModal(!modal) 
  }
  return (
    <div className='booking-section-container'>
        <div className="left">
            <div className="video-btn" onClick={toogleModal}>
                <div className='triangle'></div>
            </div>
            <div className="video-animate"></div>
        </div>
        <div className="right">
            <p className='section-name'>
                Reservation <span className="text-line"></span>
            </p>
            <p className='section-title'>
                Book A Table Online
            </p>
            <div className='inputs'>
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="datetime-local" />
                <select name="No of People" >
                    <option value="1">People 1</option>
                    <option value="2">People 2</option>
                    <option value="3">People 3</option>
                </select>
            </div>
           <textarea placeholder="Special Request"></textarea>
           <div className="book-action-btn">Book a Table</div>
        </div>
           {modal ? (
                <div className="modal">
                    <div>
                        <p>Youtube Video</p>
                        <p className="exit-btn" onClick={toogleModal}>x</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Ano80hF1BEcq7Gmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay loop></iframe>
                </div>
           ) : ""}
    </div>
  )
}

export default BookingSection
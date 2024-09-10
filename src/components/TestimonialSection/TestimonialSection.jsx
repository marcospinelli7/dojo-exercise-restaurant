import React from 'react'
import './TestimonialSection.css'

import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialSection = () => {
  return (
    <div className='testimonial-section-container responsive-padding'>
      <Swiper 
        pagination={{ clickable: true}} 
        modules={[ Pagination, Autoplay ]} 
        className="mySwiper" 
        slidesPerView={1} 
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     }}
        spaceBetween={100}
        // loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
            <TestimonialCard img="1"/>
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard img="2"/>
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard img="3"/>
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard img="4"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialSection
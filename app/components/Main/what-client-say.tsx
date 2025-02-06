"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import WhatClientSayCard from './whatClientSayCard';

function WhatClientSay() {
  const testimonials = [
    {
      name: "John Doe",
      position: "Homeowner",
      star: "⭐⭐⭐⭐⭐",
      description: "The cleaning service was exceptional! My house has never been this spotless. Highly recommended!",
    },
    {
      name: "Jane Smith",
      position: "Office Manager",
      star: "⭐⭐⭐⭐",
      description: "Great service! The cleaners were professional and thorough. Will definitely book again.",
    },
    {
      name: "Jane Smith",
      position: "Office Manager",
      star: "⭐⭐⭐⭐",
      description: "Great service! The cleaners were professional and thorough. Will definitely book again.",
    },
  ];

  return (
    <div className='p-4 md:my-36 my-6'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2} // Show two slides at a time
        autoplay={{
          delay: 3000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <WhatClientSayCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WhatClientSay;

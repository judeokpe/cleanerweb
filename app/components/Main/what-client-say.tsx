// "use client";

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import WhatClientSayCard from './whatClientSayCard';

// function WhatClientSay() {
//   const testimonials = [
//     {
//       name: "John Doe",
//       position: "Homeowner",
//       star: "⭐⭐⭐⭐⭐",
//       description: "The cleaning service was exceptional! My house has never been this spotless. Highly recommended!",
//     },
//     {
//       name: "Jane Smith",
//       position: "Office Manager",
//       star: "⭐⭐⭐⭐",
//       description: "Great service! The cleaners were professional and thorough. Will definitely book again.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Office Manager",
//       star: "⭐⭐⭐⭐",
//       description: "Great service! The cleaners were professional and thorough. Will definitely book again.",
//     },
//   ];

//   return (
//     <div className='p-4 md:my-36 my-6'>
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={50}
//         slidesPerView={2} 
    
//         autoplay={{
//           delay: 3000, // 5 seconds
//           disableOnInteraction: false,
//         }}
//         loop
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <WhatClientSayCard {...testimonial} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default WhatClientSay;



// "use client";
// import WhatClientSayCard from './whatClientSayCard';


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // Import the card component

// interface Testimony {
//   name: string;
//   position: string;
//   rating: number;
//   message: string;
// }

// const WhatClientsSay = () => {
//   const [testimonies, setTestimonies] = useState<Testimony[]>([]);

//   useEffect(() => {
//     const fetchTestimonies = async () => {
//       try {
//         const { data } = await axios.get("/api/testimonies"); // Fetch testimonies from backend
//         setTestimonies(data); // Update state
//       } catch (error) {
//         console.error("Error fetching testimonies:", error);
//       }
//     };
//     fetchTestimonies();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {testimonies.length > 0 ? (
//         testimonies.map((testimony, index) => (
//           <WhatClientSayCard
//             key={index}
//             name={testimony.name}
//             position={testimony.position}
//             star={"⭐".repeat(testimony.rating)}
//             description={testimony.message}
//           />
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No testimonies available.</p>
//       )}
//     </div>
//   );
// };

// export default WhatClientsSay;


"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WhatClientSayCard from './whatClientSayCard';

interface Testimony {
  name: string;
  position: string;
  rating: number;
  message: string;
}

const WhatClientsSay = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);

  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const { data } = await axios.get("/api/testimonies"); // Fetch testimonies from backend
        setTestimonies(data);
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };
    fetchTestimonies();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">What Clients Say</h2>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20} // Gap between cards
        slidesPerView={2} // Show 2 cards at a time
        loop={true} // Infinite loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
        pagination={{ clickable: true }} // Show pagination dots
        // navigation={true} // Add navigation arrows
      >
        {testimonies.length > 0 ? (
          testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <WhatClientSayCard
                name={testimony.name}
                position={testimony.position}
                star={"⭐".repeat(testimony.rating)}
                description={testimony.message}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">No testimonies available.</p>
        )}
      </Swiper>
    </div>
  );
};

export default WhatClientsSay;

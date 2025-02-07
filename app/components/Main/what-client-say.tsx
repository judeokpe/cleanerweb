

// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import WhatClientSayCard from './whatClientSayCard';

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
//         setTestimonies(data);
//       } catch (error) {
//         console.error("Error fetching testimonies:", error);
//       }
//     };
//     fetchTestimonies();
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-center text-2xl font-bold mb-6">What Clients Say</h2>
      
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={20} // Gap between cards
//         slidesPerView={2} // Show 2 cards at a time
//         loop={true} // Infinite loop
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
//         pagination={{ clickable: true }} // Show pagination dots
//         // navigation={true} // Add navigation arrows
//       >
//         {testimonies.length > 0 ? (
//           testimonies.map((testimony, index) => (
//             <SwiperSlide key={index}>
//               <WhatClientSayCard
//                 name={testimony.name}
//                 position={testimony.position}
//                 star={"⭐".repeat(testimony.rating)}
//                 description={testimony.message}
//               />
//             </SwiperSlide>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No testimonies available.</p>
//         )}
//       </Swiper>
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
import WhatClientSayCard from "./whatClientSayCard";// Import the card component

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
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">What Clients Say</h2>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20} // Gap between cards
        slidesPerView={1} // Start with 1 card on mobile
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 cards from tablet size (768px) upwards
        }}
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

'use client'

import React from 'react'
import WalkThroughcard from '../walkthroughcard';
import Image from 'next/image';
import { motion } from 'framer-motion';

function WalkThrough() {
  return (
    <div className='md:pb-14 pb-4 p-4 flex md:flex-row flex-col space-x-2'>
      <div className="carddiv grid grid-cols-1 md:grid-cols-2 gap-4">
        <WalkThroughcard count='01' title='Request a Quote' description='Fill out our form or contact us for a free, no-obligation quote tailored to your cleaning needs.' />
        <WalkThroughcard count='02' title='Schedule Your Service' description='Pick a date and time, and we&apos;ll work with your schedule to clean your space.' />
        <WalkThroughcard count='03' title='Expert Cleaning' description='Our team arrives with eco-friendly products, ensuring every corner is cleaned perfectly.' />
        <WalkThroughcard count='04' title='Review and Satisfaction' description='After cleaning, we review the work, addressing any concerns to guarantee your satisfaction.' />
      </div>
      <div className="imagedi pt-8 bg-gray-300 md:border-[4px] dark:bg-gray-800 md:border-green-500">
        <motion.div
          animate={{
            y: ["0px", "-10px", "0px"], // Moves the image up and down
          }}
          transition={{
            repeat: Infinity, // Repeats the animation
            duration: 4, // Duration of each cycle
            ease: "easeInOut", // Smooth easing
            repeatType: "loop", // Loops the animation
          }}
        >
          <Image
            src="/item1.webp"
            alt="cleaning item"
            width={600}
            height={600}
            className='object-fit h-[400px] w-[1200px] rounded-tl-4'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default WalkThrough;

import React from 'react'

import Image from 'next/image'
import Button from '../ui/Button'
import { BookmarkX, SparklesIcon } from 'lucide-react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { FaToolbox } from 'react-icons/fa6'
import TextCard from '../TextCard'
import Link from 'next/link'

function AutomobileServices() {
  return (
    <div className='my-36 bg-gray-100 dark:bg-gray-900 dark:shadow-md  p-6'>
      <div className="flex md:flex-row flex-col p-3 md:border space-x-6">
        <div className="max-w-[520px] mx-auto">
          <h2 className='text-center text-green-600 uppercase text-2xl font-bold'>Our Mobile Car wash Services</h2>
          <p className='text-justify text-gray-600 dark:text-gray-300 mt-4'>

Experience top-tier convenience with our mobile car wash services, bringing professional cleaning straight to your location. Whether at home, the office, or any preferred spot, our expert team ensures a spotless, showroom-quality finish for your vehicle. We use eco-friendly products and advanced techniques to deliver a deep clean, protecting your car’s exterior and interior while maintaining its shine. From quick washes to full detailing, we cater to all your car care needs with efficiency and reliability. Enjoy a hassle-free, high-quality car wash—anytime, anywhere!</p>
          <div className="my-4 space-y-4 text-gray-600 dark:text-gray-400">
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Meticulous Attention to Detail </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Premium-Quality Service </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Comprehensive Exterior & Interior Care</p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Customer Satisfaction Guarantee </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Advanced Cleaning Technology </p>
          </div>
        </div>
        <div className="">
          <Image src={"/car1.webp"} alt='cars' width={600} height={500} />
        </div>
      </div>

     
    </div>
  )
}

export default AutomobileServices

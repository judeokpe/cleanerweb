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
      <div className="flex md:flex-row flex-col p-3 md:border ">
        <div className="max-w-[520px] mx-auto">
          <h2 className='text-center text-green-600 uppercase text-2xl font-bold'>Our Automobile Services</h2>
          <p className='text-center text-gray-600 dark:text-gray-300 mt-4'>From sleek exteriors to spotless interiors, we bring out the best in your vehicle with meticulous attention and premium-quality service. Because excellence is not just a promise—it’s our standard.</p>
          <div className="my-4 space-y-4 text-gray-600 dark:text-gray-400">
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Meticulous Attention to Detail </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Premium-Quality Service </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Comprehensive Exterior & Interior Care</p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Customer Satisfaction Guarantee </p>
            <p className='flex items-center '><CheckBadgeIcon className='text-green-600 w-6 h-6' />Advanced Cleaning Technology </p>
          </div>
        </div>
        <div className="">
          <Image src={"/cars.webp"} alt='cars' width={600} height={500} />
        </div>
      </div>

      <div className="my-6">
        <p className='text-center text-green-500 text-2xl uppercase font-bold my-4'>Our Automobile Service Packages</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="shadow-lg p-6 w-[320px] bg-gray-200 dark:bg-gray-800 rounded-xl">
            
            <div className="mt-0 text-center">
              
            <TextCard imgUrl='/cleaning.webp' subPackage='Bronze'/>
            {/* Text Section */}
              <div className="mt-2 text-gray-600 dark:text-gray-300 text-[13px]">

                <div className="my-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p className='flex items-center gap-3 '> <FaToolbox className='text-green-600 w-4 h-4' />Citrus Pre Wash </p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />Snow Foam </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Hoover Cleaned incl Boot</p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />All Interior Clean </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Interior Air Fresh </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Door/Boot Sills Cleaned </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Tyres Dressed </p>
                </div>


              </div>
            </div>

            {/* Button Section */}
            <Link href="#quotation" className="mt-2 flex justify-center">
              <Button variant="gradient" className="flex">Request Service <SparklesIcon className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="shadow-lg p-6 w-[320px] bg-gray-200 dark:bg-gray-800 rounded-xl">
           
            <div className="mt-0 text-center">
              
            <TextCard imgUrl='/cleaning.webp' subPackage='Silver' />
            {/* Text Section */}
              <div className="mt-2 text-gray-600 dark:text-gray-300 text-[13px]">

                <div className="my-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p className='flex items-center gap-3 '> <FaToolbox className='text-green-600 w-4 h-4' />Citrus Pre Wash </p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />Snow Foam </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Hoover Cleaned incl Boot</p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />All Interior Clean </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Interior Air Fresh </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Door/Boot Sills Cleaned </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Tyres Dressed </p>
                </div>


              </div>
            </div>

            {/* Button Section */}
            <Link href="#quotation"  className="mt-5 flex justify-center">
              <Button variant="gradient" className="flex">Request Service <SparklesIcon className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="shadow-lg p-6 w-[320px] bg-gray-200  dark:bg-gray-800 rounded-xl">
            {/* Image Section */}
            {/* <div className="w-full flex justify-center">
              <Image
                src={"/cleaning.webp"}
                width={300}
                height={200}


                alt={"Cleaning Service"}
                className="h-[200px] w-[300px] object-cover rounded-lg"

              />
            </div> */}
            <div className="mt-0 text-center">
              
            <TextCard imgUrl='/cleaning.webp' subPackage='Gold' />
            {/* Text Section */}
              <div className="mt-2 text-gray-600 dark:text-gray-300 text-[13px]">

                <div className="my-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p className='flex items-center gap-3 '> <FaToolbox className='text-green-600 w-4 h-4' />Citrus Pre Wash </p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />Snow Foam </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Hoover Cleaned incl Boot</p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />All Interior Clean </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Interior Air Fresh </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Door/Boot Sills Cleaned </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Tyres Dressed </p>
                </div>


              </div>
            </div>

            {/* Button Section */}
            <Link href="#quotation" className="mt-5 flex justify-center">
              <Button variant="gradient" className="flex">Request Service <SparklesIcon className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="shadow-lg p-6 w-[320px] bg-gray-200 dark:bg-gray-800 rounded-xl">
            {/* Image Section */}
            {/* <div className="w-full flex justify-center">
              <Image
                src={"/cleaning.webp"}
                width={300}
                height={200}


                alt={"Cleaning Service"}
                className="h-[200px] w-[300px] object-cover rounded-lg"

              />
            </div> */}
            <div className="mt-0 text-center">
              
            <TextCard imgUrl='/cleaning.webp' subPackage='Diamond' />
            {/* Text Section */}
              <div className="mt-2 text-gray-600 dark:text-gray-300 text-[13px]">

                <div className="my-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p className='flex items-center gap-3 '> <FaToolbox className='text-green-600 w-4 h-4' />Citrus Pre Wash </p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />Snow Foam </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Hoover Cleaned incl Boot</p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-4 h-4' />All Interior Clean </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Interior Air Fresh </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Door/Boot Sills Cleaned </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-4 h-4' />Tyres Dressed </p>
                </div>


              </div>
            </div>

            {/* Button Section */}
            <Link href="#quotation"  className="mt-5 flex justify-center">
              <Button variant="gradient" className="flex">Request Service <SparklesIcon className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomobileServices

import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'
import TextCard from '../TextCard'
import { SparklesIcon } from 'lucide-react'
import { FaToolbox } from 'react-icons/fa6'

function modbilePackage() {
  return (
    <div className="my-6">
        <p className='text-center text-green-500 text-2xl uppercase font-bold my-4'>Our Mobile Car wash Service Packages</p>
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
  )
}

export default modbilePackage
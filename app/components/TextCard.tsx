import React from 'react'
import { FaToolbox } from 'react-icons/fa6'
import TextItem from './TextItem'
import Image from 'next/image'

interface TextCard {
  
    price?:string,
    subPackage: string,
    imgUrl: string
}
function TextCard({ price, subPackage, imgUrl}:TextCard) {
  return (
    <div>
        <div className="w-full flex justify-center">
              <Image
                src={imgUrl || "/cleaning.webp"}
                width={300}
                height={200}


                alt={"Cleaning Service"}
                className="h-[100px] w-[200px] object-cover rounded-lg"

              />
            </div>
      <div className="mt-2 text-center">
              <h3 className="text-xl font-semibold text-green-600 uppercase">{subPackage}</h3>
              <h4>${price}</h4>
              <div className="mt-2 text-gray-600 dark:text-gray-300 text-[13px]">

                <div className="my-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <TextItem item="Snow Foam " />
                  <TextItem item="Hoover Cleaned incl Boot " />
                  <TextItem item="All Interior Clean " />
                  <TextItem item="Interior Air Fresh" />
                  <TextItem item="Door/Boot Sills Cleaned " />
                  <TextItem item="Tyres Dressed " />
                  {/* <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-6 h-6' />Snow Foam </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-6 h-6' /></p>
                  <p className='flex items-center gap-3'><FaToolbox className='text-green-600 w-6 h-6' /></p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-6 h-6' /> </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-6 h-6' /> </p>
                  <p className='flex items-center gap-3'><FaToolbox  className='text-green-600 w-6 h-6' /></p> */}
                </div>


              </div>
            </div>
    </div>
  )
}

export default TextCard

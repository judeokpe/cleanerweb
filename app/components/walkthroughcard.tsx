'use client'

import React from 'react'

interface CardProps {
  count: string,
  title: string,
  description: string
}

function WalkThroughcard({ count, title, description }: CardProps) {
  return (
    <div className="shadow-lg p-8 border rounded-md transform transition-transform duration-300 hover:scale-105 hover:translate-y-2">
      <div className="header">
        <span className='text-green-300 font-extrabold text-7xl'>{count}</span>
      </div>
      <div className="title">
        <p className='font-bold'>{title}</p>
      </div>
      <div className="desc">
        <p className='text-gray-600 dark:text-gray-400'>{description}</p>
      </div>
    </div>
  )
}

export default WalkThroughcard;

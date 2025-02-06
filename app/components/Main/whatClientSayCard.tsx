"use client"
import React from 'react'
interface WalkThroughCardProps{
    name: string,
    position: string,
    star: string,
    description: string
}
function WhatClientSayCard({name,
    position,
    star,
    description,
}:WalkThroughCardProps) {
    return (
        <div className='shadow-md border p-6'>
            <div className="name&pos">
                <h2 className='text-2xl font-bold uppercase text-green-600'>{name}</h2>
                <h4>{position}</h4>
            </div>
            <div className="star flex justify-end">{ star || "⭐⭐⭐⭐⭐"}</div>
            <div className="desc">
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    )
}

export default WhatClientSayCard
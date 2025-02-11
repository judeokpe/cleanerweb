import React from 'react'
import { FaToolbox } from 'react-icons/fa6'
interface TextItem{
    item: string
}
function TextItem({item}: TextItem) {

  return (
    <div>
        <p className='flex items-center gap-3 '> <FaToolbox className='text-green-600 w-4 h-4' />{item} </p>
    </div>
  )
}

export default TextItem
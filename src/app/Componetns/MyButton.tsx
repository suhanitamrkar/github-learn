import { title } from 'process'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const MyButton = () => {
  return (
    <div>
        
    <button className="inline-flex items-center ml-2 text-[#174D46] hover:bg-[#174D46]  font-medium border-solid border-2 border-[#174D46]  mt-5 py-2 px-6 hover:text-white">{title} <MdKeyboardArrowRight className="h-5 w-5 items-center" />  </button>
   </div>
  )
}

export default MyButton
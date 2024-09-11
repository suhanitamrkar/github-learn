import React from 'react'
import MyButton from './MyButton'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Darkgreen = () => {
  return (
    <div className='flex justify-center bg-white'>
        <div className=' lg:w-[80%] h-[300px] bg-[#175049] md:flex md:flex-row  justify-between  '>
            <div className=' p-3 lg:w-1/2 lg:pl-20 lg:pt-20'>
                <h1 className='text-3xl text-white'>
                Do you want to get more for your business with payroll, benefits, & HR made easy?
                </h1>
            </div>
            <div className='lg:w-1/3 flex h-[3rem] mt-10 ml-5 lg:mt-20'>  
            <button className="inline-flex items-center  text-white hover:bg-white  font-medium border-solid border-2 border-white  py-1 px-2 hover:text-[#175049] "> Contact sale<MdKeyboardArrowRight className="h-5 w-5 items-center" />  </button>
            <button className="inline-flex items-center ml-2 text-white   font-medium border-solid border-2 border-white hover:border-none py-2 px-6 hover:text-white hover:bg-[#15443f] ">Request a Quete<MdKeyboardArrowRight className="h-5 w-5 items-center" />  </button>
            </div>
        </div>
    </div>
  )
}

export default Darkgreen
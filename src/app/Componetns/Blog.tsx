import React from 'react'
import { CiBank, CiShoppingCart } from 'react-icons/ci'
import { MdHomeRepairService, MdOutlineRestaurant } from 'react-icons/md'

export const Blog = () => {
  return (
    <div>
        <section className="py-3 bg-[#F1FDF8] sm:py-16 lg:py-10">
        <div className="flex items-end justify-center">
            <div className=" justify-center  text-center ">
                <h2 className="md:text-xl text-center font-medium leading-tight text-black sm:text-4xl lg:text-2xl">Overcome industry obstacles with</h2>
               <i> <p className="max-w-xl text-[#17524B] text-2xl mx-auto  leading-relaxed  lg:mx-0">Netchex payroll software</p></i>
                <p className='text-md '>Explore how Netchex is designed to meet the unique demands of various industries.</p>
            </div>

           
        </div>
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-4 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                    <CiBank className='w-20 h-20 ' />
                    </div>
                   
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                       
                    </a>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                    <CiShoppingCart className='w-20 h-20' />
                    </div>
                    
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Ho7 Tips to run your remote team faster and better. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        
                    </a>
                </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                    <MdOutlineRestaurant className='w-20 h-20' />
                    </div>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> 5 Productivity tips to write faster at morning. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                      
                    </a>
                </div>
            </div>
              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                    <MdHomeRepairService className='w-20 h-20' />
                    </div>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> 5 Productivity tips to write faster at morning. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#27AF98] transition-all duration-200 border-b-2 border-transparent hover:border-[#27AF98] focus:border-[#27AF98] ">
                        Continue Reading
                      
                    </a>
                </div>
            </div>
        </div>

        
    </div>
</section>

    </div>
  )
}

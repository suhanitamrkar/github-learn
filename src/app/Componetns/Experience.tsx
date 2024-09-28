import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
   
         <div className='bg-white h-[600px'>
        
        <div className='sm:flex sm:flex-col-1 md:py-[1rem]  md:flex ] justify-evenly items-center    '>
            <div className='sm:w-full p-3 md:w-1/2 md:px-[6rem] '>
            <h1 className='text-3xl font-semibold py-3'>
            Full mobile technology<br/>
           <span className='text-[#174D46] '> experience </span>
                </h1>
                <p className='leading-relaxed line-clamp-5 font-serif'>Developed with today’s on-the-go and ever-shifting workforce in mind, our mobile experience simplifies, yet enhances the admin and employee HR experience. Make your
                    everyday payroll, timekeeping, <br/>  and benefits easier to access anytime, anywhere.</p>
             
            </div>
            <div className=' sm:w-full md:w-1/2 md:px-[3rem]  '> 
                <Image src={""} alt='' width={100} height={100}/>

            
            </div>
        </div>
    </div>
   
  )
}

export default Experience
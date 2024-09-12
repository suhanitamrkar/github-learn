import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  return (
    <div className='bg-white md:h-[600px] sm:h-[900px]  '>
        <h1 className='text-2xl font-bold text-center pt-[3rem]  '>Benefits, HR & Payroll Made Easy</h1>
        <p className="w-full mx-auto text-center p-4  text-base text-black/70">
        Netchex is a seamless, cloud-based HR &amp;  payroll solution with integrated single sign-on purposefully <br/> built to streamline core HR operations. </p>
        <div className=' sm:flex sm:flex-col-1   md:flex h-[600px]  justify-between md:mt-[4rem] '>
            <div className='p-2'>
              <Image src={"https://b1948610.smushcdn.com/1948610/wp-content/uploads/2024/02/Group-11.png?lossy=1&amp;strip=1&amp;webp=1"}  alt='' width={400} height={400}/>
          
            </div>
            <div className=' sm:w-full p-3 md:w-1/2  sm:h-[400px] md:p-[3rem] '> 
                <h1 className='text-2xl font-semibold py-3'>
                True single-source <i>functionality</i> 
                </h1>
                <p className='leading-relaxed line-clamp-5'>Though they won’t admit it, most payroll and HR companies are a hodgepodge of disconnected systems that don’t always communicate well with one another. This leads to inconsistent data, process gaps, and more time spent on manual work.</p>
                <button className='text-[#174D46]  py-5 '> Learn More</button>

            </div>
        </div>
    </div>
  )
}

export default Benefits
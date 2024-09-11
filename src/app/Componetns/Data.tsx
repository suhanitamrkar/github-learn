"use client"
import React from 'react'
import MobileFeature, { ICardData } from './MobileFeature'



const data: ICardData[] =[
    {
        heading: 'Biometric Sign-In',
        description:'Biometric sign-in with fingerprint or facial recognition.'
        
      },
      {
        heading: 'Simple Dashboards',
        description:'Dashboards with simple navigation to all features.'
        
      },
      {
        heading: 'Easy Timeclock',
        description:'Easier-to-use punch in/out timeclock'
        
      },
      {
        heading: 'Improved Timecards',
        description:'Improved timecard view that makes editing .'
        
      }, {
        heading: 'Payment History',
        description:'Instant access to payment history, including .'
        
      }, {
        heading: 'Employee Benefits',
        description:'Access entire employee benefits experience, including enrollment'

        
      },
      {
        heading: 'Schedules',
        description:'Create and check employee schedules'

        
      },{
        heading: 'Schedules',
        description:'Create and check employee schedules'

        
      },
]
const Data = () => {

  return (
    <>
    <div className='bg-[#DFF3FF] pb-7 '>
    <h1 className='text-center text-3xl font-serif py-8'>Key employee-focused <br/>
        <span className='text-[#5BA9D5] '>mobile features</span></h1>
    <div className='grid grid-cols-1 sm:grid-row-3 gap-2 text-center sm:grid-cols-2 md:grid-cols-4 lg:gap-y-2'>
         {data.map((value) => (
          <MobileFeature {...value} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Data
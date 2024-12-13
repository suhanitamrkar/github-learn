"use client"
import React from 'react'

const Image = () => {
    const getData = () =>{
        console.log('helo');
        
    }
  return (
    <div>
        <h1 className='bg-slate-500'>this is image    </h1>
        <buttpn onClick = {getData}> Get Data</buttpn>
    </div>
  )
}

export default Image
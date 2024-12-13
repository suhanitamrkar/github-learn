import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between'> 
            <Link href='/service/to_prepare'> To Prepare</Link>
            <Link href='/service/to_process'> To Process</Link>

            <Link href='/service/deliver'> Deliver</Link>

        </nav>
    </div>
  )
}

export default Navbar
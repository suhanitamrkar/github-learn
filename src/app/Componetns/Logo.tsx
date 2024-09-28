import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
            <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"}
                alt='' width={100} height={10}/>
                
            </div>

            <div>
                <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png"}
                alt='' width={20} height={20} className="object-contain w-auto mx-auto h-14" />
               
            </div>

            <div>
                <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"}
                alt='' width={20} height={20}/>
              
            </div>

            <div>
            <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"}
                alt='' width={20} height={20}/>
            </div>

            <div>
                <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"}
                alt='' width={20} height={20}/>
            </div>

            <div>
            <img src={"https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"}
                alt='' width={20} height={20}/>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Logo
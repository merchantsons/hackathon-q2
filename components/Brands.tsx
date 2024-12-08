import React from 'react'

const Brands = () => {
  return (
    <div>
        <div className='hidden lg:block'>
          <div className='flex flex-row justify-around bg-black h-[7vmin] lg:h-[8.5vmin] lg:px-[30vmin]'>
            <div className='w-[24vmin]'><img src="/brands/versace.png" alt="verlogo" /></div>
            <div className='w-[24vmin]'><img src="/brands/zara.png" alt="zarlogo" /></div>
            <div className='w-[24vmin]'><img src="/brands/gucci.png" alt="guclogo" /></div>
            <div className='w-[24vmin]'><img src="/brands/prada.png" alt="pradalogo" /></div>
            <div className='w-[24vmin]'><img src="/brands/calvin.png" alt="calvinlogo" /></div>
          </div>
        </div>
        <div className='lg:hidden w-[97vmin]'><img src="/brands/sm.png" alt="verlogo" /></div>        
    </div>
  )
}

export default Brands
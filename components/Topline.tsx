import React from 'react'

const Topline = () => {
  return (
    <div className='bg-black text-gray-50 py-[1vmin] flex flex-row justify-center gap-[20vmin] lg:gap-[45vmin]'>
          <div className='cursor-pointer ml-[0vmin] lg:ml-[50vmin]'><img src="/topline.png" alt="" /></div>
          <div className='hidden lg:block cursor-pointer'><img src="/topx.png" alt="" /></div>          
    </div>
    
  )
}

export default Topline
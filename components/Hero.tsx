import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#f2f0f1]'>
       <div className='hidden lg:block justify-self-center w-[100vmin] md:w-[120vmin] lg:w-[140vmin]'><img src="/extras/next.png" alt="" /></div>       
       <div><button className='hidden lg:block absolute -ml-[15vmin] lg:-mt-[28.2vmin] lg:ml-[43vmin] bg-black text-white rounded-3xl px-[6vmin] py-[1.4vmin] font-poppins hover:bg-slate-700 text-[1.6vmin]'>Shop Now</button></div>
       
       <div className='block lg:hidden'>
         <div><img className='w-[180vmin]' src="/extras/next-sm1.png" alt="" /></div>
         <div className='px-[2vmin]'><button className='w-full bg-black text-white rounded-full px-[5vmin] py-[3vmin] font-poppins hover:bg-slate-700 text-[3vmin]'>Shop Now</button></div>
         <div><img className='mt-[2vmin] w-[50vmin] justify-self-center mb-[2vmin]' src="/extras/heros1.png" alt="" /></div>
         <div><img className='w-[20vmin] justify-self-center' src="/extras/heros2.png" alt="" /></div>
         <div><img className='w-[180vmin]' src="/extras/next-sm2.png" alt="" /></div>         
       </div>    
    </div>
  )
}

export default Hero
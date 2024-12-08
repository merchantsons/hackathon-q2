import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {

  return (
    <div className='px-[10vmin] lg:px-[30vmin] bg-[#f2f0f1] -mt-[10vmin]'>
      <div className='pt-[10vmin] lg:flex flex-row justify-around gap-[5vmin]'>
        <div className='lg:w-[25vmin]'>
          <div className='mt-[10vmin]'><img src="/shopco-logo.png" alt="" /></div>
          <div className='text-[2.9vmin] lg:text-[1.5vmin] text-gray-500 mt-[3vmin]'>We have Clothes that suits your style and which you're proud to ware. From women to men.</div>
          <div>
            <div className='flex mt-[3vmin] cursor-pointer'>
              <i className="bg-[#999] fa fa-twitter rounded-full w-[6vmin] h-[6vmin] lg:w-[3vmin] lg:h-[3vmin] text-center content-center text-gray-700 mr-[.8vmin] hover:bg-[#1DA1F2] hover:text-white" />
              <i className="bg-[#999] fa fa-facebook rounded-full w-[6vmin] h-[6vmin] lg:w-[3vmin] lg:h-[3vmin] text-center content-center text-gray-700 mr-[.8vmin] hover:bg-[#305483] hover:text-white" />
              <i className="bg-[#999] fa fa-instagram rounded-full w-[6vmin] h-[6vmin] lg:w-[3vmin] lg:h-[3vmin] text-center content-center text-gray-700 mr-[.8vmin] hover:bg-[#9b3f5e] hover:text-white" />
              <i className="bg-[#999] fa fa-github rounded-full w-[6vmin] h-[6vmin] lg:w-[3vmin] lg:h-[3vmin] text-center content-center text-gray-700 mr-[.8vmin] hover:bg-[#ad3535] hover:text-white" />
            </div>
          </div>
        </div>

        <div className='sm:flex flex-row gap-[19vmin]'>
          <div className='flex flex-col mt-[10vmin] gap-[1.5vmin]'>
            <div><a className='font-poppins tracking-[.5vmin] mb-[1vmin]' href='#'>COMPANY</a></div>
            <div><a className='mt-[0vmin]' href='#'>About</a></div>
            <div><a href='#'>Features</a></div>
            <div><a href='#'>Works</a></div>
            <div><a href='#'>Career</a></div>
          </div>
          <div className='flex flex-col mt-[10vmin] gap-[1.5vmin]'>
            <div><a className='font-poppins tracking-[.5vmin]' href='#'>HELP</a></div>
            <div><a className='mt-[2vmin]' href='#'>Customer Support</a></div>
            <div><a href='#'>Delivery Details</a></div>
            <div><a href='#'>Privacy Policy</a></div>
            <div><a href='#'>Career</a></div>
          </div>
        </div>

        <div className='sm:flex sm:flex-row sm:gap-[9vmin]'>
          <div className='flex flex-col mt-[10vmin] gap-[1.5vmin]'>
            <div><a className='font-poppins tracking-[.5vmin]' href='#'>FAQ</a></div>
            <div><a className='mt-[2vmin]' href='#'>Account</a></div>
            <div><a href='#'>Manage Deliveries</a></div>
            <div><a href='#'>Orders</a></div>
            <div><a href='#'>Payments</a></div>
          </div>
          <div className='flex flex-col mt-[10vmin] gap-[1.5vmin]'>
            <div><a className='font-poppins tracking-[.5vmin]' href='#'>RESOURCES</a></div>
            <div><a className='mt-[2vmin]' href='#'>Free eBooks</a></div>
            <div><a href='#'>Development Tutorial</a></div>
            <div><a href='#'>How To - Blog</a></div>
            <div><a href='#'>Youtube Playlist</a></div>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 mt-[10vmin] pb-[10vmin]' />
      <div className='ml-[5vmin] flex flex-col lg:flex-row lg:justify-between lg:-mt-[8vmin] lg:pb-[10vmin] :justify-self-center'>
        <div className='text-gray-500'>Shop.co © 2000-2023. All Rights Reserved </div>
        <div className='text-gray-500'><img src="/extras/cards.png" alt="" /> </div>
      </div>
    </div>
  )
}

export default Footer
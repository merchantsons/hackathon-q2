import React from 'react'

const DressStyle = () => {
  return (
    <div>
        <div className='hidden lg:block justify-self-center'><img className='w-[144vmin]' src="/bds/big.png" alt="" /></div>
        <div className='lg:hidden bg-[#f2f0f1] py-[5vmin] rounded-xl w-auto justify-self-center px-[5vmin]'>
            <div><img className='py-[4vmin] w-[50vmin] justify-self-center' src="/bds/bds.png" alt="" /></div>
            <div><img className='py-[2vmin] w-[80vmin]' src="/bds/casual.png" alt="" /></div>
            <div><img className='py-[2vmin] w-[80vmin]' src="/bds/formal.png" alt="" /></div>
            <div><img className='py-[2vmin] w-[80vmin]' src="/bds/party.png" alt="" /></div>
            <div><img className='py-[2vmin] w-[80vmin]' src="/bds/gym.png" alt="" /></div>
            <div><img className='py-[2vmin] w-[80vmin]' src="" alt="" /></div>
        </div>
    </div>
  )
}

export default DressStyle
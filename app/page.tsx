import React from 'react'
import Brands from '@/components/Brands'
import DressStyle from '@/components/DressStyle'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewArrivals from '@/components/NewArrivals'
import Topline from '@/components/Topline'
import TopSelling from '@/components/TopSelling'
import HappyCust from '@/components/HappyCust'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
       <Topline />
       <Navbar />
       <Hero />
       <Brands />
       <NewArrivals />
       <TopSelling />
       <DressStyle />
       <HappyCust />
       <NewsLetter />
       <Footer />       
    </div>
  )
}

export default page
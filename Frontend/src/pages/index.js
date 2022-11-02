import React from 'react';
import Hero from '../component/Hero/Hero'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import Features from '../component/Features/Features'
import Statistics from '../component/Statistics/Statistics'
import Image from 'next/image'

const index = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Statistics />
    <Footer />
    </>
  )
}

export default index
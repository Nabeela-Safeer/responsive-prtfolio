"use client"

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (

    <section>
        <Navbar/>

    <div className=' bg-gray-800 p-20 flex justify-between'>
        <div className='col-span-7  sm:text-left'>
        <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-white flex'>
                Hello, I am {" "} 
                </span>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Nabeela',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'web developer',
        1000,
        'Next.JS Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', }}
      repeat={Infinity}
     /> 
            </h1>
           <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>A passionate Web Developer with a focus on building modern, responsive, and user-friendly websites and web applications. With a strong foundation in both front-end and back-end development, I enjoy crafting clean, efficient, and maintainable code that enhances the user experience.</p>
           <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via bg-white to-cyan-600 hover:bg-slate-200 text-white'>Hire me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via bg-white to-cyan-600 hover:bg-slate-200 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full'>Download CV</span></button>
        </div>
        </div>
        
        <div className='col-span-full'>
            <div className='rounded-full bg-gradient-to-br from-blue-700 via bg-white to-cyan-600 w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative'>
             <Image
            src="/hero1.jpeg"
            alt="hero image"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full sm:h-[230px] sm:w-[230px] lg:h-[500] lg:w-[500]' 
            height={600}
            width={600}
             />
            </div>
        </div>
        
         
        
    </div>
     
   </section>

   
  )
}

export default Hero

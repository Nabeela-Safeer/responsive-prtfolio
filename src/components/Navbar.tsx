import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className=' p-2 h-12 bg-gradient-to-br from-blue-700 via bg-white to-cyan-600'>
        <div className='flex justify-between items-center'>
        <div className='text-2xl font-medium'>Portfolio</div>
        <ul className='space-x-6 lg-gap-16 hidden md:flex cursor-pointer '>
        <li className='hover:text-[#c5c5c5]'><a href="#hero">Home</a></li>
        <li className='hover:text-[#c5c5c5]'><a href="#about">About</a></li>
        <li className='hover:text-[#c5c5c5]'><a href="#projects">Projects</a></li>
        <li className='hover:text-[#c5c5c5]'><a href="#skills">Skills</a></li>
        <li className='hover:text-[#c5c5c5]'><a href="#contact">Contact</a></li>
        </ul>
        <TiThMenuOutline className='md:hidden' size={30}/>

        </div>
    </div>
  )
}

export default Navbar
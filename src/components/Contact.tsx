import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";




const Contact = () => {
  return (
    <div id="contact" className='pt-20 bg-gray-800 text-white'>
        <div className='grid md:grid-cols-2 gap-10 p-5'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
                <p className='text whitespace-normal text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <IoIosMail  size={30}/> xyz@gmail.com

                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <BsTelephone size={30}/> (021) 000-0000

                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <FaLinkedin size={30}/> www.linkedin.com
                </div>
            </div>
            <div className='space-y-8 p-5'>
               <div className='flex flex-col gap-1' data-aos="zoom-in-up">
               <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-transparent border border-cyan-800' id='name'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type='text' className='h-[40px] bg-transparent border border-cyan-800' id='email'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
               <label htmlFor='message'>Message</label>
                <textarea className=' bg-transparent border border-cyan-800' id='message' rows={8}></textarea>
                </div>
                <button className='bg-gradient-to-br from-blue-700 via bg-white to-cyan-600 rounded-sm p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
            
        </div>
    </div>
  )
}

export default Contact
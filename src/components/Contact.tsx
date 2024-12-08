import React from 'react'
import { IoMailUnread } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Get In Touch </h2>
          <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up"> Drop me a line, give me a call, or send me a message by submitting form
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
             <IoMailUnread  size={30}/> <a href="mailto:shahzaibrajput240@gmail.com">shahzaibrajput240@gmail.com</a>
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
             <IoIosContact  size={30}/> +92 3133224079
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
             <IoLogoLinkedin  size={30}/> <a href="https://www.linkedin.com/in/shahzaib-rajput-93360628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
             Let&apos;s Connect On Linkedin</a>
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='name'>Name</label>
            <input type='text' 
            className='h-[40px]  border border-1px-black'
              id='name' />
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='email'>Email</label>
            <input type='text' 
            className='h-[40px]  border border-1px-black'
              id='email' />
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='msg'>Message</label>
            <textarea  
            className=' border border-1px-black '
              id='msg' rows={8} >
                </textarea>
          </div>
          <button className='bg-black text-white p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

"use client"
import React from 'react'
import phone from '../../public/phone.png'
import mail from '../../public/mail.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className='px-6 md:px-0 max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
            <div className='flex justify-center items-center'>
                <ul className='space-y-4'>
                    <li className='flex items-center'>
                        <Image src={phone} className='h-[80px] w-auto' alt='phone' />
                        <p className='text-xl'>+91-8879004828</p>
                    </li>
                    <li className='flex items-center'>
                        <Image src={mail} className='h-[80px] w-auto' alt='mail' />
                        <p className='text-xl'>chintuvishwa2001@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className='bg-white/10 p-6 rounded-xl max-w-[600px]'>
                <h2 className='text-5xl font-bold text-orange-400 mb-4'>Lets connect</h2>
                <p className='text-white/70 mb-6'>Send me a message and lets scheldule a call!</p>
                <form action="https://getform.io/f/bgdlvora" method="POST" className='space-y-4'>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <input required type="text" name='firstname' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' />
                        <input required type="text" name='lastname' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' />
                        <input required type="email" name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' />
                        <input required type="phone" name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' />
                    </div>
                    <textarea name="Message" id="mesage" className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message'></textarea>
                    <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Me</button>

                </form>
            </div>
        </div>
    )
}

export default Contact
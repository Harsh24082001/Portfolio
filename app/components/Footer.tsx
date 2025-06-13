import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='px-6 md:px-6 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex items-center justify-between'>
            <h1 className='md:text-xl font-bold'>Copyright &copy; {year}  Harsh Dev </h1>
                <div className='flex space-x-6 md:mt-4 '>
                    <a href="#" className='hover:text-gray-300'>
                        <FaLinkedin size={25}/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <FaInstagram size={25}/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <FaTwitter size={25}/>
                    </a>
                </div>
        </div>
    )
}

export default Footer
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navbarlink = [
    // { title: "Portfolio", path: "#portfolio" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const togglenav = () => {
        setNav(!nav)
    }

    const closenav = () => {
        setNav(false)
    }

    const menuvariant ={
        open:{
            x:0, 
            transition:{
                stiffness:20,
                damping:15
            }
        },
        closed:{
             x:'-100%', 
            transition:{
                stiffness:20,
                damping:15
            }
        }
    }

    return (
        <>
            <div className='text-white/70 '>
                <div className='hidden md:flex items-center px-2 py-2 mx-auto max-w-[800px]'>
                    <div className='flex justify-center items-center gap-50'>
                        <div className='text-white font-bold text-2xl' id='#'>👋 Harsh Dev</div>
                        <ul className='flex flex-row p-4 space-x-8 text-xl'>
                            {navbarlink.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path}>
                                        <p>{link.title}</p>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href='#contact' className='group'>
                                    <h1 className='text-xl font-bold text-white/70 cursor-pointer'>Contact</h1>
                                    <div className='relative'>
                                        <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out bg-amber-400 rounded-full group-hover:w-full'></div>
                                        <div className='mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-amber-600 rounded-full group-hover:w-full'></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={togglenav} className='md:hidden absolute top-5 right-5 border rounded text-white/70  border-black/70 p-2 z-50'>
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
                </div>

                <motion.div
                initial={false}
                animate={nav?'open': 'closed'}
                variants={menuvariant}
                className='fixed left-0 top-0 w-full z-40 bg-black/90'
                >
                    <ul className='text-3xl font-semibold my-24 text-center space-y-8'>
                        {navbarlink.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} onClick={closenav}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar
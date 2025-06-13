"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import setting from '../../public/icon1.png'
import light from '../../public/icon2.png'
import harsh from '../../public/harsh.png'
import profile from '../../public/profile.png'


const Hero = () => {
    return (
        <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] text-white mt-20'>
            <div className='absolute rounded-[50%] w-[3000px] h-[1300px]   top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>
            <div className='relative'>
                <div className='md:px-0 md:text-8xl text-4xl font-bold text-center px-4 py-6'>
                    <Image
                        src={harsh}
                        alt="Background"
                        className=" absolute inset-0 w-30 h-30 object-cover  rounded-full border border-white left-[1000px] "
                    />

                        <h1 className='text-[#98B4CE] backdrop-brightness-100'>Hii, I <span className='backdrop-blur-2xl'>am</span> </h1>
                        <h1 className='text-[#E48A57]'>Harsh Vishwakarma</h1>
                </div>
                <motion.div
                    className='hidden md:block absolute left-[180px] top-[170px]'
                    drag
                >
                    <Image src={setting} height={120} width={120} alt='html' className=''
                        draggable='false' />
                </motion.div>
                <motion.div
                    className='hidden md:block absolute right-[160px] top-[50px]'
                    drag
                >
                    <Image src={light} height={90} width={90} alt='html' className=''
                        draggable='false' />
                </motion.div>
                <p className='text-center md:text-xl  max-w-[600px] mx-auto mt-8 text-white/80'>
                    I am a full-stack developer to build responsive, user-friendly web applications with clean UI and efficient backend logic.
                </p>
                <Image src={profile} alt='profile picture' className='mx-auto h-auto w-120 mt-10' />
            </div>
        </div>
    )
}

export default Hero
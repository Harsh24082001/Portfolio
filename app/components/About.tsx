"use client"
import Image from 'next/image'
import React from 'react'
import book from '../../public/book.png'
import card from '../../public/card.png'
import finance from '../../public/finance.png'
import pc from '../../public/pc.png'

const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-10' id='about'>
            <h1 className='text-white max-w-[320px] mx-auto text-6xl font-bold p-4 mb-5'>About <span className='text-orange-400'>Me</span></h1>
            <div className='px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center'>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt='book' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl text-white/80 font-bold'>Education</h2>
                            <p className='text-md text-white/70 mt-2'>Pursuing MCA at Thakur College, focusing on full-stack development with technologies like React, Node.js, Tailwind CSS, and MongoDB for building scalable web apps.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt='pc' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl text-white/80 font-bold'>Problem-Solving</h2>
                            <p className='text-md text-white/70 mt-2'>Tackle challenges logically, optimize code, and deliver efficient software solutions.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={card} alt='card' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl text-white/80 font-bold'>Experience</h2>
                            <p className='text-md text-white/70 mt-2'>Currently working at KartBuddy as a Full Stack Developer, building real-world applications.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt='finance' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl text-white/80 font-bold'>Technical Skill</h2>
                            <p className='text-md text-white/70 mt-2'>Proficient in React, Node.js, Express.js, MongoDB, Java, SQL, Tailwind CSS, and Bootstrap. Capable of building scalable, responsive, and efficient web applications.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
'use client'
import React from 'react'
import project from '../../public/project.jpg'
import project1 from '../../public/landing.png'
import project2 from '../../public/connecthub.png'
import project3  from '../../public/travel.png'
import project4 from '../../public/Ai Image Generator.png'
import project5 from '../../public/Textgenerator.png'
import { motion } from 'framer-motion'
import Image from 'next/image'


const projects=[
    {
        title:"KartBuddy Website",
        desc:"KartBuddy is a modern, responsive landing page designed using React js to promote and showcase the features of the KartBuddy platform. It focuses on clean design, fast performance, and smooth user experience.",
        devStack:"REACT JS, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/KartBuddy-Landing-Page",
        src: project1
    },
    {
        title:"Connect Hub Website",
        desc:"ConnectHub is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js), designed to connect professionals, students, and job seekers. Inspired by platforms like LinkedIn, it enables users to build profiles, make connections, and grow their professional network.",
        devStack:"NEXT JS, NODE JS, EXPRESS JS, MONGO_DB, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/ConnectHub",
        src: project2
    },
    {
        title:"Booking and Travel Website",
        desc:"A full-featured travel and booking web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to explore destinations, view packages, and book their trips online with a seamless and responsive interface.",
        devStack:"MERN STACK, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/Travel-Website",
        src: project3
    },
     {
        title:"AI Image Generator - MERN Stack + Gemini API",
        desc:"AI Image Generator is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) integrated with Google’s Gemini API. Users can upload or describe an image concept, and the app generates unique, high-quality AI images in real-time.",
        devStack:"MERN STACK, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/Image-Generator",
        src: project4
    }, 
    {
        title:"Text Generator - Gemini API",
        desc:"Text Generator is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) integrated with Google’s Gemini API. Users can upload or describe an image concept, and the app generates unique, high-quality AI Text in real-time",
        devStack:"MERN STACK, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/Image-Generator",
        src: project5
    },
    {
        title:"Calculator Website",
        desc:"A basic calculator web application built using React.js. It performs standard arithmetic operations (addition, subtraction, multiplication, division) with a clean and responsive user interface.",
        devStack:"REACT JS, TAILWIND CSS",
        gitLink:"https://github.com/Harsh24082001/Calculator",
        src: project
    },
    
]

const Project = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-30' id='projects'>
                    <h1 className='text-white max-w-[320px] mx-auto text-6xl font-semibold my-12 '>Selected <span className='text-orange-400'>Projects</span></h1>

        <div className='px-6 md:px-0 max-w-[1200px] mx-auto mt-32 space-y-24'>
            {
                projects.map((project , index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5, delay:0.25}}
                        className={`mt-12 flex flex-col${index % 2 === 1 ? " md:flex-row-reverse gap-12":" md:flex-row"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl '>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-orange-500 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[2px] bg-gray-400 my-4 '>
                                <a href={project.gitLink}>Git Links</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className='h-[400px] w-auto object-cover border rounded border-gray-700'/>
                        </div>

                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Project
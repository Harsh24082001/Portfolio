
import React from 'react'
import { BiData } from 'react-icons/bi'
import { FaCss3, FaGit, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'


const skillIcons=[
    {icon:<FaHtml5 size={140}/>, label:'HTML'},
    {icon:<FaCss3 size={140}/>, label:'CSS'},
    {icon:<FaJsSquare size={140}/>, label:'Javascript'},
    {icon:<FaReact size={140}/>, label:'React'},
    {icon:<FaNodeJs size={140}/>, label:'Nodejs'},
    {icon:<BiData size={140}/>, label:'MongoDb'},
    {icon:<FaJava size={140}/>, label:'Java'},
    {icon:<FaGit size={140}/>, label:'Git'},
    
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white max-w-[1000px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'> 
                {skillIcons.map((skill, index) => (
                    <div key={index} className='md:w-[200px] md:h-[220px] w-[200px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
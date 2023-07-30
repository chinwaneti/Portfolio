"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
    const Skill = ({name, x, y }) => { // Changed the function name to start with an uppercase letter (convention for React components)
        return (
            <motion.div
                className='flex items-center justify-center absolute py-3 px-6  rounded-full font-semibold bg-black text-white  shadow-black'
                whileHover={{ scale: 1.05 }}
                initial={{ x: 0, y: 0 }}
                whileInView={{ x: x, y: y }}
                transition={{ duration: 1.5 }}
            >   
                {name}
            </motion.div>
        );
    };

    return (
        <div className='md:w-full w-[50%] mx-auto'>
            <h2 className='font-bold md:text-8xl text-5xl md:mt-32 my-20 w-full text-center'>Skills</h2>
            <div className='md:w-full mx-auto md:h-screen  relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div
                    className='flex items-center  md:w-10 md:h-10  w-[50%] justify-center  cursor-pointer rounded-full font-semibold bg-black text-white md:p-10 p-3 shadow-black'
                    whileHover={{ scale: 1.05 }} 
                >
                    Web
                </motion.div>
                <Skill  name="HTML" x="-20vw" y="2vw" />
                <Skill name="Tailwind" x="-0vw" y="-10vw" />
                <Skill  name="CSS" x="-25vw" y="-5vw" /> 
                <Skill name="JavaScript" x="-20vw" y="2vw" /> 
                <Skill name="Next.js" x="0vw" y="10vw" /> 
                <Skill name="React.js" x="20vw" y="2vw" /> 
                <Skill  name="Github" x="25vw" y="-5vw" /> 
                <Skill name="Responsive Design" x="30vw" y="-10vw" /> 
                <Skill name="Problem-Solving" x="-30vw" y="10vw" /> 
                <Skill name="Continuous Learner " x="30vw" y="10vw" /> 
                <Skill name="CSS Animation" x="-30vw" y="-10vw" /> 
               
            </div>
        </div>
    );
}

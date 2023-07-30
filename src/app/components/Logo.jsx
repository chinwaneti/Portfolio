"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


export default function Logo() {
    const MotionLink = motion(Link)
  return (
    <div className='flex hidden ml-[995%] md:block items-center justify-center mt-2 '>
    <MotionLink href='/about' 
    className='w-16  h-16 text-white flex items-center font-bold bg-black justify-center rounded-full'
    whileHover={{
        backgroundColor:["#121212","rgba(131, 58, 180, 1)", 'rgba(252, 176, 69, 1)', "rgba(252, 176, 69, 1)",'rgba(152, 136, 45, 1)',"rgba(431, 58, 18, 6)","rgba(7, 376, 269, 13)","#121212"],
        transition:{duration:1, repeat: Infinity}
    }}
    >MMA</MotionLink></div>
  )
}

"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import Logo from './Logo'
import { motion } from 'framer-motion'
import { BiLinkExternal } from "react-icons/bi"
import MyComponent from './hooks/Mycomponents'
import Hamburger from './Hamburger'

export default function Navbar() {
  // const CustomLink = ({ href, title,  }) => {

  //   return (
  //     <Link href={href}>
  //       <span className="" >
  //         <motion.p
  //         initial={{ x: 0 }}
  //         whileHover={{ x: 5 }}
  //         whileTap={{ scale: 0.9 }}
  //         className="relative   group-hover:underline hide"
  //       >
  //         {title}
  //       </motion.p>
       
  //         &nbsp;
  //       </span>
  //     </Link>
  //   );
  // };

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="relative group cursor-pointer">
       
        <motion.p
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative z-10  group-hover:underline "
        >
          {children}
        </motion.p>
      </div>
    </Link>
  );
};

  
  return (
<header className= 'md:w-full  bg-gray-100 text-black flex md:px-5 py-8 items-center justify-between space-x-10  font-medium '>
{/* <nav  className=' hidden md:block items-center flex justify-end md:space-x-10 space-x-3 '> */}
    <ul className="hidden sm:flex md:flex space-x-10 text-sm items-center">
  <li className="relative group">
    <NavLink href="/">Home</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/about">About</NavLink>
  </li>
  <li className="relative group">
    <NavLink href="/projects">
      Projects
    </NavLink>
  </li>
  <li className="relative group">
    <NavLink href='mailto:chidinmanwaneti.cn@gmail.com'target={"_blank"}>Contact</NavLink>
  </li>
 
</ul>
  
{/* <CustomLink href='/' title='Home' className=''/>
<CustomLink href='/about' title='About' className=''/>
<CustomLink href='/projects' title='Projects' className=''/>
<CustomLink href='mailto:chidinmanwaneti.cn@gmail.com'target={"_blank"} title='Contact' className=''/> */}

{/* </nav> */}
<div className='ml-1 '>
<Hamburger />
</div>
<div className='absolute top-2 translate-x-[-20%]'><Logo /> </div>
<nav className='flex items-center sm:justify-end  space-x-5'>
    <motion.a href='https://twitter.com/Chi_Nwaneti' target={'_blank'} 
    whileHover={{y: -2}}
    whileTap={{scale: 0.9}}
    ><AiOutlineTwitter size={25} style={{color: '#39BAC6'}}/></motion.a>
    <motion.a href='https://www.linkedin.com/in/chidinma-nwaneti-603698202/' target={'_blank'} 
    whileHover={{y: -2}}
    whileTap={{scale: 0.9}}
    ><AiOutlineLinkedin  size={25}style={{color: '#4F77B0'}}/></motion.a>
    <motion.a href='https://github.com/chinwaneti' target={'_blank'} 
    whileHover={{y: -2}}
    whileTap={{scale: 0.9}}
    ><AiOutlineGithub  size={25}style={{color: ''}}/></motion.a>
    <motion.a href='mailto:chidinmanwaneti.cn@gmail.com' target={'_blank'} 
    whileHover={{y: -2}}
    whileTap={{scale: 0.9}}
    ><AiOutlineMail size={25} style={{color: 'red'}}/>
    </motion.a>

   
</nav>
</header>
  )
}

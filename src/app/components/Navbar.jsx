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
  // const CustomLink = ({ href, title, className = "" }) => {

  //   return (
  //     <Link href={href} className={`relative group ${className}`}>
  //       {title}
  //       <span
  //         className="h-[1px] w-full bg-black absolute left-0 -bottom-0.5 opacity-0 group-hover:opacity-100 transition-[width] ease-in-out duration-300"
  //       >
  //         &nbsp;
  //       </span>
  //     </Link>
  //   );
  // };

  const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="relative group cursor-pointer">
       
        <motion.p
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative   group-hover:underline hide"
        >
          {title}
        </motion.p>
      </div>
    </Link>
  );
};

  
  return (
<header className= 'md:w-full  bg-gray-100 text-black flex md:px-5 py-8 items-center justify-between space-x-10  font-medium '>
<nav  className=' hidden md:block items-center flex justify-end md:space-x-10 space-x-3 '>
<NavLink href='/' title='Home' className=''/>
<NavLink href='/about' title='About' className=''/>
<NavLink href='/projects' title='Projects' className=''/>
<NavLink href='mailto:chidinmanwaneti.cn@gmail.com'target={"_blank"} title='Contact' className=''/>
{/* <CustomLink href='/' title='Home' className=''/>
<CustomLink href='/about' title='About' className=''/>
<CustomLink href='/projects' title='Projects' className=''/>
<CustomLink href='mailto:chidinmanwaneti.cn@gmail.com'target={"_blank"} title='Contact' className=''/> */}

</nav>
<div className='ml-1 '>
<Hamburger />
</div>
<div className='absolute Md:left-[50%] top-2 translate-x-[-50%]'><Logo /> </div>
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

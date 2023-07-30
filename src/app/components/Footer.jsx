import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className=''>
    <div className='py-8  w-full px-8 flex items-center border-t-2 border-solid  mt-5  font-bold space-x-[25%]'>
    <span>{new Date().getFullYear()} &copy; all Rights Reserved.</span>
    <div className='flex items-center'>
      <Link href='/about'>  Built with <span className='text-purple-500 px-1 '>&#9825; 
      
     by MMA</span></Link>
    </div>
    <Link href='mailto:chidinmanwaneti.cn@gmail.com' target={"_blank"} >Say Hello</Link>
    </div>
    </footer>
    )
}

import Image from 'next/image'
import React from 'react'
import pic from '../images/frontend.png'
import Link from 'next/link'

export default function HireMe() {
  return (
    <div>
    <div className='right-4 fixed bottom-4 flex items-center justify-center overflow-hidden'>
    <div className='w-45 h-auto flex items-center justify-center relative '>
    <Image src={pic} height={100} width={100} alt='picture' className={"fill-black  w-full animate-spin-slow "}/>
    <Link href='mailto:chidinmanwaneti.cn@gmail.com' className='flex items-center justify-center absolute right-1/2 top-2/2 translate-x-1/2 translate-y-2/2 text-xs bg-black text-white w-[40%] h-[40%] hover:bg-white hover:font-bold hover:text-black border-solid hover:border-4 shadow-md hover:border-black rounded-full'> Hire Me</Link>
    </div>
    </div>
    </div>
  )
}

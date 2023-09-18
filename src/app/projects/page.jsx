"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import pic from "../images/store.jpg"
import mine from "../images/tv.jpg"
import nep from "../images/Capture.png"
import pica from "../images/screen.jpg"




export default function page() {
    const Featured = ({type, title, summary, img, link, github}) =>{
        return(
            <div className='w-[90%] mx-auto h-full relative  flex items-center border-solid  border-black border-2 justify-between rounded-3xl bg-white shadow-2xl p-8'>

          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black '/>
           
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg '>
            <Image src={img} alt={title} width={150} height={150} className='mx-auto hidden sm:block'></Image>
            </Link>
            <div className='flex flex-col items-start justify-between left-6'>
            <span className='text-purple-500 font-medium text-xl'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 text-left text-4xl font-bold '>{title} </h2></Link>
            <div className='mt-2 flex items-center'> 
            <Link href={github} target="_blank" className=' w-10'>
            <h2><AiOutlineGithub /> </h2></Link>
            <Link href={link} target="_blank" >
            <h2 className='ml-4 rounded-lg text-right bg-black p-2 font-semibold text-white px-6'>Visit Project</h2></Link>
            </div>
            <p className='my-2 font-medium text-black'>{summary} </p>
            <div></div>
            </div>

            </div>
        )
    }
  
    const Project = ({type, title, summary, img, link, github}) =>{
        return(
            <div className='md:w-[90%] relative mx-auto  flex items-center border-solid border-black border-2 justify-between rounded-3xl bg-white shadow-2xl p-8'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black '/>

            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg '>
            <Image src={img} alt={title} width={150} height={150} className='mx-auto hidden sm:block'></Image>
            </Link>
            <div className='flex flex-col items-start justify-between left-6'>
            <span className='text-purple-500 font-medium text-xl'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 text-left text-4xl font-bold '>{title} </h2></Link>
            <div className='mt-2 flex items-center'> 
            <Link href={github} target="_blank" className=' w-10'>
            <h2><AiOutlineGithub /> </h2></Link>
            <Link href={link} target="_blank" >
            <h2 className='ml-4 rounded-lg text-right bg-black p-2 font-semibold text-white px-6'>Visit Project</h2></Link>
            </div>
            <p className='my-2 font-medium text-black'>{summary} </p>
            <div></div>
            </div>
            </div>
        )
    }
    const Project2 = ({type, title, summary, img, link, github}) =>{
      return(
          <div className='md:w-[90%] w-[70%] mx-auto flex  relative items-center border-solid border-black border-2 justify-between rounded-3xl bg-white shadow-2xl p-8 '>

          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black '/>

          <Link href={link} target="_blank"
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg '>
          </Link>
          <div className='flex flex-col items-start justify-between left-6'>
          <span className='text-purple-500 font-medium text-xl'>{type}</span>
          <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <Image src={img} alt={title} width={200} height={100} className='mx-auto '></Image>
          <h2 className='my-2 text-left text-4xl font-bold '>{title} </h2></Link>
          <p className='my-2 font-medium text-black'>{summary} </p>
          <div className='mt-2 flex justify-between w-full items-center'> 
          <Link href={github} target="_blank" className=' w-10'>
          <h2><AiOutlineGithub /> </h2></Link>
          <Link href={link} target="_blank" >
          <h2 className='ml-4 rounded-lg text-right bg-black p-2 font-semibold text-white px-6'>Visit Project</h2></Link>
          </div>
          <div></div>
          </div>
          </div>)}
  return (
    <div className=' '>
    <motion.p className='font-bold md:text-7xl text-4xl border-solid p-5  border-b-2 w-[80%] mx-auto my-32 text-center ' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}>
    Welcome to my portfolio Page! 
    </motion.p>
    <div className=''>
    <div className=''> 
    <Featured 
    type='Featured Project'
    title="Mma Store (e-commerce)"
    img={pic}
    summary="Welcome to our innovative e-commerce app, 
    powered by a skillful blend of ReactJS and Next.js.
     Seamlessly designed using Tailwind CSS, 
     it promises a delightful shopping experience. 
     Hosted on Netlify, it guarantees swift loading 
     times and secure transactions. Discover convenience 
     and elegance as you shop for your favorite products, all in one place."
     link='https://resplendent-duckanoo-c880af.netlify.app'
     github='https://github.com/chinwaneti/capstone-project'
    />
    <div className='my-10 md:w-[90%] sm:w-[80%] w-[90%] mx-auto '>
    <Featured 
    type=' Project'
    title="Oja (e-commerce)"
    img={pica}
    summary="Welcome to our innovative e-commerce app, 
    powered by ReactJS, Redux and Redux tool kit for state management.
     Stylish designed using Tailwind CSS, 
     Discover convenience 
     and elegance as you shop for your favorite products."
     link='https://serene-centaur-dd7abc.netlify.app'
     github='https://github.com/chinwaneti/oja'
    />
   </div>
    <div className=''>
    <div className='my-10 md:w-[90%] sm:w-[80%] w-[90%] mx-auto '> 
    <Project type='Project'
    title="MovieHub"
    img={mine}
    summary="Immerse
     yourself in a world of captivating shows and movies, 
     all in the palm of your hand. Developed with ReactJS,
        Consumed the TMDB API to fetch movie data. Our app
       ensures a smooth and engaging user experience. With
        its sleek design and intuitive navigation, finding and watching
         your favorite content has never been easier. 
         Hosted on Netlify, it offers seamless streaming 
         and top-notch performance."


     link='https:https://zuri-stage-2.vercel.app/'
     github='https://github.com/chinwaneti/zuri-stage-2'
    />
    </div>
   
    <div className='my-10 w-full mx-auto h-[50%]'>
    <Project2 type='Project'
    title="Mma Jobs"
    img={nep}
    summary="Welcome to our state-of-the-art TV app, 
    where entertainment takes center stage. Immerse
     yourself in a world of captivating shows and movies, 
     all in the palm of your hand. Developed with ReactJS
    and Next.js, and powered by a rendered API, our app
    ensures a smooth and engaging user experience.
   Hosted on Netlify, it offers seamless streaming 
    and top-notch performance. "


     link='https://mma-jobs.netlify.app'
     github='https://github.com/chinwaneti'
    />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
  }

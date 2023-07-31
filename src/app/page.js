"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiLinkExternal } from 'react-icons/bi';
import { Nunito } from 'next/font/google';
import HireMe from './components/HireMe';

const mine = Nunito({ subsets: ['latin'], weight: ['400'] });

export default function Page() {
  return (
    <div className={mine.className}>
      <div className="bg-cover bg-center h-400 " style={{ backgroundImage: "url('')" }}>

        <div className='ml-5 mt-14'>
          <Image src='https://media.istockphoto.com/id/501917606/photo/double-exposure-portrait.jpg?s=612x612&w=0&k=20&c=baJldYZIGJcM7JPZ8XTQhFln0lKvvtBz2Yox1sQ7reI=' width={500} height={400} className='mr-5 float-right mt-0 py-0' alt='Portrait' />
          <p>
            <h2 className='font-bold'>Hi, my name is</h2>
          </p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.4 } }}
          >
            <motion.p className='mt-2' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.6 } }}>
              <h1 className='font-extrabold md:text-6xl text-4xl'>Chidinma Nwaneti.</h1>
            </motion.p>
            <motion.p className='' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.8 } }}>
      <h1 className='font-extrabold text-3xl text-purple-500'>I am a Frontend developer.</h1>
            </motion.p>
          </motion.div>
          <motion.p className='font-bold md:w-[50%]  ' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}>
            Hello there! I am delighted to welcome you to my virtual abode, where the realms of
            creativity and technology converge. Allow me to introduce myself –
            I am Chidinma Nwaneti, a frontend developer with a deep passion
            for crafting remarkable digital experiences. I invite you to
            embark on a journey through my world of elegant design,
            seamless user interfaces, and cutting-edge web development.
          </motion.p>
        </div>
        <Link href='/cv.pdf' target={'_blank'}>
          <div className='bg-black text-white ml-5 mt-6 rounded-lg w-28 h-10 justify-between px-2 text-center py-2 flex'>Resume <BiLinkExternal size={20} />
          
          </div>
        </Link>
        <div className='ml-[50%] w-full'><HireMe /></div>

      </div>
    </div>
  );
}

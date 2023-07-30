"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Nunito } from 'next/font/google';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const mine = Nunito({ subsets: ['latin'], weight: ['400'] });

export default function Page() {
  return (
    <div className={mine.className}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.6 } }}
        className='md:text-6xl text-4xl pt-16 px-2 ml-5 font-bold flex flex-col text-center font-mono justify-center'
      >
        Passion Fuels Purpose!
      </motion.div>

      <div className='w-[90%] p-10 md:text-3xl text-xl mx-auto'>
        <div>
          <h2 className='mb-4 text-lg font-bold uppercase text-purple-500'>/ Biography</h2>
          <p className='font-medium mb-5'>
            <strong>Greetings!</strong>
          </p>
        </div>
        <motion.p
          className='md:w-[90%] w-full'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        >
          <p>
            <strong>Welcome to my portfolio!</strong>
          </p>
          My name is Chidinma Nwaneti, and I am an enthusiastic frontend developer with a deep-seated passion for
          crafting extraordinary digital experiences. My portfolio boasts a diverse array of projects, each one
          showcasing my unwavering commitment to excellence. So, my dear visitor, I extend an open invitation to you.
          Let&apos;s embark on this immersive journey together.
        </motion.p>
      </div>
      <Skills />
      <Experience />
    </div>
  );
}

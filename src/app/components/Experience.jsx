import Link from 'next/link';
import React from 'react';

export default function Experience() {
  const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
      <li className='md:my-8 w-[60%] mx-auto flex justify-between flex-col mb-5'>
        <h2 className='capitalize text-2xl font-bold'>
          {position} &nbsp; <a href={companyLink} target='_blank' className='text-purple-500 capitalize'>@{company}</a>
        </h2>
        <span className='capitalize font-medium text-black/75 '>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </li>
    );
  };

  return (
    <div>
      <div className='md:mt-32 mt-14 mb-10'>
        <h2 className='font-bold md:text-8xl text-5xl  w-full text-center'>Experience</h2>
      </div>
      <div className='mb-20'>
        <ul className='list-disc'> {/* Added list-disc class */}
          <Details
            position='Frontend Web Developer'
            company='Univelcity'
            companyLink='https://univelcity.com/'
            time='2023-Present'
            address='Montgomery Rd, Sabo Yaba'
            work={`As a frontend developer, 
            my main duty is to bring life to websites and web applications.
            I craft user interfaces using HTML, CSS, and JavaScript,
            ensuring they are visually appealing and user-friendly.
            Through responsive design and engaging elements,
            I create seamless experiences that captivate users and leave a lasting impression.`}
          />
        </ul>
      </div>
    </div>
  );
}

"use client"
import React, { useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

export default function Hamburger() {
  const [Nav, setNav] = useState(false);

  return (
    <div>
      <div
        onClick={() => setNav((prev) => !prev)}
        className=""
      >
        <BsFilterLeft size={30} className="z-50" />
      </div>

      {/* Nav Menu (Hidden on big screens) */}
      <div
        className={
          Nav
            ? 'fixed left-0 top-0 md:w-[30%] z-50 h-screen bg-gray-200 overscroll-auto p-10 ease-in duration-1000 block'
            : 'hidden'
        }
      >
        <div className="flex overscroll-auto justify-end">
          <div onClick={() => setNav((prev) => !prev)}>
            <AiOutlineClose />
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-auto py-2 text-white">
          <ul>
            <Link href="/">
              <li onClick={() => setNav(false)} className="py-2 flex space-x-4">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => setNav(false)} className="py-2 flex space-x-4">
                About
              </li>
            </Link>
            <Link href="/projects">
              <li onClick={() => setNav(false)} className="py-2 flex space-x-4">
                Project
              </li>
            </Link>
            <Link href="/chidinma nwaneti-cv.pdf" target={'_blank'}>
              <li onClick={() => setNav(false)} className="py-2 flex space-x-4">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}



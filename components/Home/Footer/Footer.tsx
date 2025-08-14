import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10 dark:bg-gray-900'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
          {/* Logo and description */}
          <div>
            {/* Logo */}
            <h2 className='text-xl md:text-2xl font-bold'>
              <span className='text-3xl md:text-4xl text-sage'>E</span>stefania
            </h2>
            {/* Description */}
            <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
              Front End Developer
            </p>
          </div>
          {/* About lins */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-sage'>
              About Us
            </h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
            </ul>
          </div> 
          <div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-sage'>
              About Us
            </h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
            </ul>
          </div> 
        </div>
        {/* Bottom section */}
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='text-center md:text-left'>
            Copyright @ 2025 Webdev. All rights reserved.
          </p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>
              Social :
            </span>
            <Link href='#' className='text-gray-500 hover:text-gray-800' >
              <FaFacebook />
            </Link>
            <Link href='#' className='text-gray-500 hover:text-gray-800' >
              <FaTwitter />
            </Link>
            <Link href='#' className='text-gray-500 hover:text-gray-800' >
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
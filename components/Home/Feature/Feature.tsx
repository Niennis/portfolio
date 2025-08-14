import React from 'react'
import { FaBook, FaCog, FaDesktop, FaHeadset, FaInfinity, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

const Feature = () => {

  const features = [
    {
      icon: <FaLayerGroup className='text-red-500' />,
      text: 'JavaScript',
    },
    {
      icon: <FaLaptop className='text-blue-500' />,
      text: 'HTML',
    },
    {
      icon: <FaMobileAlt className='text-yellow-500' />,
      text: 'CSS',
    },
    {
      icon: <FaDesktop className='text-purple-500' />,
      text: 'React',
    },
    {
      icon: <FaCog className='text-teal-500' />,
      text: 'NextJS',
    },
    {
      icon: <FaHeadset className='text-green-500' />,
      text: 'MongoDB',
    },
    {
      icon: <FaInfinity className='text-pink-500' />,
      text: 'NodeJS',
    },
    {
      icon: <FaBook className='text-indigo-500' />,
      text: 'ExpressJS',
    },
    {
      icon: <FaShieldAlt className='text-orange-500' />,
      text: 'Enhanced Security',
    },
  ]

  return (
    <div className='bg-lightsage pt-20 pb-20 text-black  
    bg-gradient-to-r from-darkteal to-lightsage
    dark:bg-gradient-to-r dark:from-darkteal dark:to-gray-900'>
      <div className='w-[80%] mx-auto text-center'>
        <h2 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center dark:text-white'>
          Tech Skills
        </h2>
        <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3 dark:bg-sage'
            >
              <div className='text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 dark:bg-gray-300 flex items-center justify-center flex-col rounded-full'>
                <span>{feature.icon}</span>
              </div>
              <span className='font-semibold'>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
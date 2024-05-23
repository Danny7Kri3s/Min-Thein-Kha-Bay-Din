import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Nav = ({darkMode, toggleBtn}) => {
  

  return (
    <div className='flex justify-between p-6'>
      <p className='dark:text-white text-[1.1rem] font-bold font-burmaFont'>မင်းသိင်္ခ /
လက်ထောက်ဗေဒင်</p>
      <button onClick={toggleBtn} className='md:p-4 p-2 bg-gray-700 text-white rounded-[50%] dark:bg-gray-300 dark:text-black'>
        {darkMode ? <CiLight className='text-[2rem] font-bold'/> : <MdDarkMode className='text-[2rem] font-bold' />}
      </button>
    </div>
  )
}

export default Nav

import React from 'react'
import img from '../../public/img/mintheinkha_logo.png'

const Logo = () => {
  return (
    <div className='flex flex-col items-center gap-3 mb-5'>
      <img src={img} alt="MinTheinKha" className='w-[7rem] h-7rem ' />
      <h1 className='text-[#894d40] font-burmaFont dark:text-white text-[1.5rem] font-[700]'>လက်ထောက်ဗေဒင်</h1>
    </div>
  )
}

export default Logo

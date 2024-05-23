import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContextCustom } from '../context/Context'


const NumberList = () => {
  const {state: {numberList, question}, dispatch} = StateContextCustom()

  const nav = useNavigate();

  if (!question) {
    nav('/')
  }

  return (
    <div className='flex flex-col items-center text-center h-screen'>
      <p className='text-[1.2rem] font-bold font-burmaFont'>{question.questionName}</p>
      <Link to='/'>
        <button className='bg-[#894d40] text-white font-burmaFont my-5 px-5 py-2 rounded-[5rem] hover:bg-[#5c2020]'>နောက်သို့</button>
      </Link>
      <div className='grid grid-cols-9 gap-1'>
        {numberList.map((number) => (
          <Link to='/answer' onClick={() => dispatch({type: 'addSelectedNum', payload: number.eng})}>
            <span  className='bg-[#894d40] hover:bg-[#5c2020] md:w-10 md:h-9 w-[1.9rem] h-8 flex justify-center items-center text-white rounded-md ' >{number.myan}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NumberList

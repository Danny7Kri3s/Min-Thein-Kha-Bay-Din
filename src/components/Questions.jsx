import React, { useEffect } from 'react'
import { StateContextCustom } from '../context/Context'
import { Link } from 'react-router-dom';

const Questions = (props) => {
  const {questionNo, questionName} = props
  const {dispatch} = StateContextCustom();

  const handleClick = () =>{
      dispatch({type:'addQuestionNo', payload: props })
  }
  
  return (
    <div className='' key={questionNo} onClick={handleClick}>
      <Link to='/numberList'>
        <div className='border border-1 flex flex-col lg:flex-row hover:bg-slate-300 dark:hover:bg-slate-700'>
          <span className='md:py-6 pt-3 w-[5rem] text-center font-bold lg:border-r-[2px] text-[#894d40]'>{questionNo}</span>
          <p className='font-burmaFont text-[0.95rem] my-6 font-bold text-[#894d40] px-5 dark:text-white'>{questionName}</p>
        </div>
      </Link>
    </div>
  )
}

export default Questions


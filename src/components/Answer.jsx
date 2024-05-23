import React from 'react'
import { StateContextCustom } from '../context/Context'
import { Link } from 'react-router-dom';

const Answer = () => {
  const {state: {question, selectedNum, answerList}} = StateContextCustom();
  const [answer] = answerList.filter(ans => ans.questionNo === question.questionNo && ans.answerNo === selectedNum);

  console.log(answer)

  return (
    <div className='h-screen text-center'>
      <Link to='/'>
        <button className='bg-[#894d40] text-white font-burmaFont my-5 px-5 py-2 rounded-[5rem] hover:bg-[#5c2020]'>ထပ်မေးမည်</button>
        </Link>
      <p className='text-[1.2rem] font-bold font-burmaFont'>{answer?.answerResult}</p>
    </div>
  )
}

export default Answer

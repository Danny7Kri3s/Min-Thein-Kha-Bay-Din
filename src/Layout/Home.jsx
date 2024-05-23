import React from 'react'
import { StateContextCustom } from '../context/Context'
import Questions from '../components/Questions';
import Input from '../components/Input';

const Home = () => {
  const {state:{questionsList}, search} = StateContextCustom();
  

  return (
    <div className='dark:bg-slate-800 flex flex-col items-center  bg-white md:w-[98%] p-5 mx-auto rounded-md'>
      <Input/>
      <div>
        {questionsList.length > 1  ? (
          questionsList.map((question) => {
            return (
                <Questions key={question.questionNo} {...question} />
            )
          })
        ) : (search ? (
          <div className='border-2  w-[100%] p-10'>
            <p>There is No Data about "{search}"</p>
          </div>
        ): (
          <div>
            Please Wait
          </div>
        )) }
      </div>
    </div>
  )
}

export default Home
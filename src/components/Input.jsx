import React, { useState } from 'react'
import {StateContextCustom} from '../context/Context'

const Input = () => {

  const { state: { questionsList }, dispatch, search, setSearch } = StateContextCustom()
  
  return (
    <form className='w-[90%] md:w-[60%] mx-auto text-center mb-10'>
      <div>
        <p className='text-start my-2 md:text-center'>သိလိုသော မေးခွန်းအား ရှာဖွေပါ...</p>
        <input
         type="text"
         placeholder='တစ်ခုခု ရိုက်ထည့်ပါ...'
         className='bg-slate-300 px-4 py-2 w-[100%] md:w-[70%] rounded-xl placeholder:text-gray-500 dark:text-black' 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
      </div>

      
      
    </form>
  )
}

export default Input

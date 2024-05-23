import React, { useState } from 'react'
import Answer from '../components/Answer'
import NumberList from '../components/NumberList'
import Home from './Home'
import Nav from './Nav'
import Logo from '../components/Logo'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'


const Page = ({darkMode, toggleBtn}) => {
  
  return (
    
      <div className={`${darkMode && 'dark'}`}>
        <div className='dark:bg-slate-500 bg-slate-100 '>
          
          <Nav darkMode={darkMode} toggleBtn={toggleBtn}/>
          <div className='dark:text-white'>
            <Logo />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Baydin' element={<Home/>} />
              <Route path='/numberList' element={<NumberList to="/Baydin"/>} />
              <Route path='/answer' element={<Answer/>} />
            </Routes> 
            <Footer/>
          </div>
        </div>
      </div>
  )
}

export default Page

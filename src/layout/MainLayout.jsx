import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../image/logo.png'

const MainLayout = () => {
  return (
    <main className='mx-10 py-12 mx-w-[1200px]'>  
      <div className='grid grid-cols-3 items-center'>
        <div>
          <div>
            <img src={logo} alt="Logo" className='w-52'/>
          </div>
        </div>
        <div className='text-white text-center'>
            <h1 className="text-3xl font-bold mt-8">Study Smarter With <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF]'>Quizmate</span></h1>
            <p className='text-xl mt-1'>Instant answer for all assignments</p>
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default MainLayout

import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className='relative w-[100vw] h-[70vh] mt-[78px] bg-gradient-to-br from-blue-500/10 via-blue-400/10 to-orange-400/10'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='flex items-center justify-center flex-col gap-3'>
            <div className='flex items-center justify-center gap-1 flex-col'>
              <i className="fa-solid fa-graduation-cap text-[40px] md:text-[50px] h-[70px] md:h-[100px] w-[70px] md:w-[100px] p-5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 flex items-center justify-center rounded-xl shadow-lg"></i>
              <h1 className='text-[90px] tracking-wider mt-[-20px] bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-600 bg-clip-text text-transparent'>BroDocs</h1>
            </div>
            <div className='text-center mt-[-30px]'>
              <p className='text-[10px] sm:text-[15px] md:text-[20px] text-gray-400 tracking-wider'>Your centralized platform for sharing and accessing educational <br /> materials. Empowering students with easy access to quality <br /> study resources.</p>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-4 mt-2'>
              <Link to='/library'><button className=' w-[90vw] sm:w-[300px]  flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-500/80 cursor-pointer text-[16px] text-white rounded-md py-2 px-8'><i className='bx  bx-book-library'></i> <p>Browse Library</p></button></Link>
              <Link to='/upload'><button className=' w-[90vw] sm:w-[300px]  flex items-center justify-center gap-3 text-black hover:text-white hover:bg-orange-500 cursor-pointer text-[16px] bg-white rounded-md py-2 px-8 duration-300'><i className='fa fa-arrow-up-from-bracket'></i><p>Upload Document</p></button></Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-gray-100/10 h-[2px] border-none rounded-2xl' />
      <About />
      <Footer/>
    </>
  )
}

export default Home

import React from 'react'

const About = () => {
  return (
    <div className='w-[100vw] flex items-center justify-center flex-wrap lg:flex-nowrap gap-9 py-20'>
      <div className='flex items-center justify-center flex-col gap-2 w-[80vw] lg:w-[350px] h-[200px] py-3 px-5 bg-gray-500/10 border-2 border-gray-600/20 rounded-md hover:shadow-[0px_10px_15px_-3px_#ffffff1a]'>
        <div className='h-[60px] w-[60px] bg-blue-700/20 flex items-center justify-center text-[25px] text-blue-400 rounded-md'>
          <i className='fa fa-arrow-up-from-bracket'></i>
        </div>
        <p className='my-2 text-[22px] font-semibold'>Easy Upload</p>
        <span className='text-center text-[15px] text-gray-400'>Teachers can quickly upload study materials in various formats</span>
      </div>
      <div className='flex items-center justify-center flex-col gap-2 w-[80vw] lg:w-[350px] h-[200px] py-3 px-5 bg-gray-500/10 border-2 border-gray-600/20 rounded-md hover:shadow-[0px_10px_15px_-3px_#ffffff1a]'>
        <div className='h-[60px] w-[60px] bg-cyan-700/20 flex items-center justify-center text-[25px] text-cyan-400 rounded-md'>
          <i className='bx  bx-book-library'></i>
        </div>
        <p className='my-2 text-[22px] font-semibold'>Organized Library</p>
        <span className='text-center text-[15px] text-gray-400'>Documents categorized by subject for easy navigation</span>
      </div>
      <div className='flex items-center justify-center flex-col gap-2 w-[80vw] lg:w-[350px] h-[200px] py-3 px-5 bg-gray-500/10 border-2 border-gray-600/20 rounded-md hover:shadow-[0px_10px_15px_-3px_#ffffff1a]'>
        <div className='h-[60px] w-[60px] bg-orange-700/20 flex items-center justify-center text-[25px] text-orange-400 rounded-md'>
          <i className='bx  bx-book-open'></i>
        </div>
        <p className='my-2 text-[22px] font-semibold'>Instant Access</p>
        <span className='text-center text-[15px] text-gray-400'>Students can search, filter, and download documents instantly</span>
      </div>
    </div>
  )
}

export default About


import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col'>
        <p className='font-semibold text-5xl mb-3'><span className='text-red-400'>404</span> Page Not Found</p>
        <h4 className='text-2xl text-gray-300/40'>Please enter valid url !</h4>
      </div>
    </div>
  )
}

export default NotFound

import React, { useContext } from 'react'
import { StoreContext } from '../context/context'
import { Link, useNavigate } from 'react-router-dom'

const Library = () => {
  const { url, Files } = useContext(StoreContext);
  const navigate = useNavigate();



  return (
    <div className='lg:h-[100vh] pt-[90px] w-[70vw] m-auto mb-8'>
      <Link to='/' className='w-full'><div className='w-full flex items-center gap-3 text-[16px] text-gray-500 mb-5'>
        <i className='fa fa-arrow-left'></i>
        <p>Back to Home</p>
      </div></Link>
      <div>
        <p className='text-4xl md:text-5xl text-blue-500 font-semibold'>Documents Library</p>
        <span className='ml-3 text-[16px] text-gray-500'>Browse and download study materials</span>
      </div>
      <hr className='h-[1px] my-3 border-none bg-gray-400' />
      <div className='flex items-center gap-5 flex-wrap mt-10 ml-[20px]'>
        {Files.map((item, index) => {
          return (
            <div key={index} className='w-[80vw] md:w-[50vw] lg:w-[33vw] 2xl:w-[20vw] bg-gray-600/30 border-2 border-gray-300/20 p-5 rounded-md hover:shadow-[0_5px_10px_0_#3d3c3c] ' >
              <div>
                <div className='flex items-center justify-start flex-col'>
                  <p className='text-xl font-semibold w-full text-gray-200 mb-3'>{item.name}</p>
                  <span className='w-full text-[14px] flex items-center gap-2 text-gray-300'><i className='fa fa-calendar-days'></i> {item.date}</span>
                  <div className='w-full'>
                    <a href={url + "/images/" + item.image} download={url + "/images/" + item.image}><button className='bg-blue-500 text-white w-full h-[35px] rounded-md mt-3'><i className='fa fa-download'></i>Download</button></a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Library

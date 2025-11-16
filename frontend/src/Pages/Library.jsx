import React, { useContext } from 'react'
import { StoreContext } from '../context/context'
import { Link } from 'react-router-dom'

const Library = () => {
  const { url, Files, getData } = useContext(StoreContext);

  return (
    <div className='lg:h-[100vh] pt-[90px] w-[90vw] lg:w-[80vw] md:w-[80vw] sm:w-[90vw] 2xl:w-[70vw] m-auto mb-8'>
      <Link to='/' className='w-full'><div className='w-full flex items-center gap-3 text-[16px] text-gray-500 mb-5'>
        <i className='fa fa-arrow-left'></i>
        <p>Back to Home</p>
      </div></Link>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <div>
          <p className='text-4xl md:text-5xl text-blue-500 font-semibold'>Documents Library</p>
          <span className='ml-3 text-[16px] text-gray-500'>Browse and download study materials</span>
        </div>
        <div className='w-full flex items-center justify-end'>
          <button onClick={()=>getData()} className='border border-black rounded-md bg-gray-500 text-sm px-3 py-2'>Refresh <i className='fa fa-refresh text-sm'></i></button>
        </div>
      </div>
      <hr className='h-[1px] my-3 border-none bg-gray-400' />

      <div className='w-[95%] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ml-[20px]'>
        {Files.map((item, index) => {
          return (
            <div key={index} className='md:col-span-1 sm:col-span-3 col-span-3 bg-gray-600/30 border-2 border-gray-300/20 p-5 rounded-md hover:shadow-[0_5px_10px_0_#3d3c3c] ' >
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

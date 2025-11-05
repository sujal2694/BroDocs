import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from '../context/context'


const Navbar = () => {
  const { setToken } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    setToken('')
    navigate('/')
  }
  return (
    <div className=' fixed top-0 left-0 w-[100vw] border-b-2 border-gray-700 backdrop-blur-[5px] z-10'>
      <div className=' w-[90vw] sm:w-[80vw] md:-[80vw] lg-[80vw] m-auto flex items-center justify-between py-3 lg:py-0'>
        <div className='flex items-center gap-2'>
          <i className='bx  bx-book-open lg:text-[30px] text-[20px] lg:h-[45px] h-[30px] lg:w-[45px] w-[30px] lg:p-5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 flex items-center justify-center lg:rounded-[10px] rounded-md shadow-lg'></i>
          <Link to='/'><h1 className='lg:text-[50px] text-[25px] cursor-pointer bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-600 bg-clip-text text-transparent '>BroDocs</h1></Link>
        </div>
        <div className='flex items-center gap-3'>
          <Link to='/ai'><div className='group cursor-pointer lg:py-2 py-1 lg:px-3 px-2 bg-blue-500/90 border-2 border-gray-700/40 shadow-lg rounded-full flex items-center lg:gap-4 gap-1'>
            <i className='bx  bx-sparkles text-xl lg:text-3xl' ></i> 
            <p className='hidden group-hover:block lg:text-[20px] text-[20px] group-hover:transition group-hover:duration-300'>AI</p>
          </div></Link>
          <div onClick={() => logout()} className=' cursor-pointer lg:py-2 py-1 lg:px-4 px-2 bg-blue-500/90 hover:bg-blue-500/70 border-2 border-gray-700/40 shadow-lg rounded-lg flex items-center lg:gap-4 gap-2'>
            <i className="fa fa-arrow-right-from-bracket lg:text-2xl text-xl "></i>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

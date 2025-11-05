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
      <div className=' w-[90vw] sm:w-[80vw] md:-[80vw] lg-[80vw] m-auto flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <i className='bx  bx-book-open text-[30px] h-[45px] w-[45px] p-5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 flex items-center justify-center rounded-[10px] shadow-lg'></i>
          <Link to='/'><h1 className='text-[50px] cursor-pointer bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-600 bg-clip-text text-transparent '>BroDocs</h1></Link>
        </div>
        <div className='flex items-center gap-3'>
          <Link to='/ai'><div className='group cursor-pointer py-2 px-3 bg-blue-500/90 border-2 border-gray-700/40 shadow-lg rounded-full flex items-center gap-4'>
            <i className='bx  bx-sparkles text-3xl' ></i> 
            <p className='hidden group-hover:block text-[20px] group-hover:transition group-hover:duration-300'>AI Preference</p>
          </div></Link>
          <div onClick={() => logout()} className=' cursor-pointer py-2 px-4 bg-blue-500/90 hover:bg-blue-500/70 border-2 border-gray-700/40 shadow-lg rounded-lg flex items-center gap-4'>
            <i className="fa fa-arrow-right-from-bracket text-2xl "></i>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

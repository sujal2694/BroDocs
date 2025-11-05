import React from 'react'

const LoginBar = () => {
    return (
        <div className=' fixed top-0 left-0 w-[100vw] border-b-2 border-gray-700'>
            <div className=' w-[70vw] m-auto flex items-center gap-2'>
                <i className='bx  bx-book-open text-[30px] h-[45px] w-[45px] p-5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 flex items-center justify-center rounded-[10px] shadow-lg'></i>
                <h1 className='text-[50px] cursor-pointer bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-600 bg-clip-text text-transparent '>BroDocs</h1>
            </div>
        </div>
    )
}

export default LoginBar

import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/context'
import axios from 'axios'
import LoginBar from './LoginBar';

const SigninPopUp = () => {
    const { currState, setCurrState, token, setToken, url } = useContext(StoreContext);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Sign In") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div>
            <LoginBar />
            <div className=' absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center flex-col z-10 '>
                < form onSubmit={onLogin} className='relative flex items-center flex-col gap-10 rounded-[8px] p-5 w-[80vw] md:w-[50vw] lg:w-[25vw] shadow-[0_0_2px_1px_#5e5e5e] bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-orange-400/20 text-white border-2 border-gray-100/10 ' >
                    <div className='flex items-center flex-col w-full'>
                        <div className='w-full py-2 my-3 text-center flex items-center justify-center'>
                            <h2 className='text-[40px] font-semibold'>{currState}</h2>
                        </div>
                        <div className='w-full flex items-center justify-center flex-col'>
                            {currState === "Sign Up"
                                ? (<><div className='h-[50px] w-[95%] mt-5'>
                                    <input type="text" name='name' value={data.name} onChange={onChangeHandler} placeholder='Username' className='bg-transparent border-2 border-gray-600/50 mb-3 w-full h-full rounded-[5px] pl-3 placeholder:text-[16px] text-[16px] ' required />
                                </div>
                                    <div className='h-[50px] w-[95%] mt-5'>
                                        <input type="email" name='email' value={data.email} onChange={onChangeHandler} placeholder='Email' className='bg-transparent border-2 border-gray-600/50 mb-3 w-full h-full rounded-[5px] pl-3 placeholder:text-[16px] text-[16px] ' required />
                                    </div>
                                    <div className='h-[50px] w-[95%] mt-5'>
                                        <input type="password" name='password' value={data.password} onChange={onChangeHandler} placeholder='Password' className='bg-transparent border-2 border-gray-600/50 mb-3 w-full h-full rounded-[5px] pl-3 placeholder:text-[16px] text-[16px] ' required />
                                    </div></>)
                                : (<><div className='h-[50px] w-[95%] mt-5'>
                                    <input type="email" name='email' value={data.email} onChange={onChangeHandler} placeholder='Email' className='bg-transparent border-2 border-gray-900/50 mb-3 w-full h-full rounded-[5px] pl-3 placeholder:text-[16px] text-[16px] ' required />
                                </div>
                                    <div className='h-[50px] w-[95%] mt-5'>
                                        <input type="password" name='password' value={data.password} onChange={onChangeHandler} placeholder='Password' className='bg-transparent border-2 border-gray-900/50 mb-3 w-full h-full rounded-[5px] pl-3 placeholder:text-[16px] text-[16px] ' required />
                                    </div></>)
                            }
                        </div>
                        <div className=' w-full '>
                            <p className='flex items-center gap-1 text-[12px] text-gray-400 w-[85%] pl-3 mt-2 '>
                                <input type="checkbox" className='outline-none border-none bg-transparent w-3' required />
                                Accept all <a href="#" className='underline text-blue-400 cursor-pointer'>Terms & Conditions</a>
                            </p>
                        </div>
                    </div>
                    {currState === "Sign Up"
                        ? <button type='submit' className='w-full bg-blue-500 text-white h-[50px] rounded-[5px] font-semibold text-xl hover:bg-blue-600'>Create an account</button>
                        : <button type='submit' className='w-full bg-blue-500 text-white h-[50px] rounded-[5px] font-semibold text-xl hover:bg-blue-600'>Sign In</button>
                    }
                    {currState === "Sign Up"
                        ? <p className='mt-[-20px] text-[14px] tracking-wide cursor-pointer'>If you have an account? <span onClick={() => setCurrState("Sign In")} className='text-blue-400 underline'>Sign In</span></p>
                        : <p className='mt-[-20px] text-[14px] tracking-wide cursor-pointer'>Have you create an account? <span onClick={() => setCurrState("Sign Up")} className='text-blue-400 underline'>Sign Up</span></p>
                    }
                </form >
            </div >
        </div>

    )
}

export default SigninPopUp

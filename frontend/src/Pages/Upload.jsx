import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/context';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Upload = () => {

    const { url } = useContext(StoreContext);

    const [file, setFile] = useState(false);
    const [image, setImage] = useState(false);
    const [data, setdata] = useState({
        name: "",
        date: "",
    })

    const onChangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata((data) => ({ ...data, [name]: value }))
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("date", data.date)
        formData.append("image", file)
        const response = await axios.post(`${url}/api/docs/add`, formData)
        if (response.data.success) {
            setdata({
                name: "",
                date: "",
            })
            setFile(false)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }
    }
    return (
        <div className='pt-[50px] w-[90vw] lg:w-[40vw] md:w-[70vw] h-[100vh] m-auto flex items-center justify-center flex-col p-10'>
            <Link to='/' className='w-full'><div className='w-full flex items-center gap-3 text-[16px] text-gray-500 mb-5'>
                <i className='fa fa-arrow-left'></i>
                <p>Back to Home</p>
            </div></Link>
            <form onSubmit={onSubmit} className='bg-gray-700/20 border-2 border-gray-600/20 rounded-md p-5 w-full '>
                <div>
                    <div className='flex items-center gap-5'>
                        <div className='bg-blue-500 text-white text-[20px] p-3 rounded-md flex items-center justify-center'>
                            <i className='fa fa-arrow-up-from-bracket'></i>
                        </div>
                        <div>
                            <p className='text-[25px] font-semibold mb-[-10px]'>Upload Document</p>
                            <span className='text-[14px] text-gray-500'>Share study materials with students</span>
                        </div>
                    </div>

                    <div className='p-10 w-full'>
                        <div className='w-full mb-8'>
                            <p className='text-[18px] mb-3'>Title *</p>
                            <input className='border-2 border-gray-500/20 bg-gray-400/30 w-full h-[40px] pl-3 rounded-md outline-none focus:border-gray-300/90' type="text" name='name' value={data.name} onChange={onChangehandler} placeholder='e.g. Introduction of calculus' required />
                        </div>
                        <div className='w-full mb-8'>
                            <p className='text-[18px] mb-3'>Date *</p>
                            <input className='border-2 border-gray-500/20 bg-gray-400/30 w-full h-[40px] pl-3 rounded-md outline-none focus:border-gray-300/90 ' type="date" name='date' value={data.date} onChange={onChangehandler} placeholder='Date of today' required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="file" className='text-[18px]'>
                                <p className='mb-3'>File *</p>
                                {!file
                                ?<img src={assets.upload} alt="" className='w-[150px] md:w-[200px]' />
                                :<><iframe src={file ? URL.createObjectURL(file) : assets.upload} className='w-[300px]'></iframe></>}
                            </label>
                            <input id="file" type="file" onChange={(e)=>setFile(e.target.files[0])} accept=".pdf,.doc,.docx,.ppt,.pptx,.txt" className=' border-2 border-gray-500/20 bg-gray-400/30 w-full h-[40px] pl-3 rounded-md outline-none focus:border-gray-300/90 ' required hidden />
                            <p className="text-[16px] text-gray-500">Supported formats: PDF, DOC, DOCX, PPT, PPTX, TXT</p>
                        </div>
                    </div>
                </div>
                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-500/80 h-[40px] rounded-md'>Upload Document</button>
            </form>
        </div>
    )
}

export default Upload

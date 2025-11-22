import React, { useContext } from 'react'
import { StoreContext } from '../context/context';
import { Link } from 'react-router-dom';

const ChatBot = () => {
    const { onSent, recentPrompt, result, loading, resultData, setInput, input } = useContext(StoreContext);

    return (
        <div className='h-[90vh] flex items-start flex-col w-[90vw] lg:w-[80vw] m-auto mt-[100px] '>
            <Link to='/' className='w-full'><div className='w-full flex items-center gap-3 text-[16px] text-gray-500 mb-5'>
                <i className='fa fa-arrow-left'></i>
                <p>Back to Home</p>
            </div></Link>

            <div className='w-full'>
                {!result
                    ? <div className='w-[90vw] lg:w-[70vw] px-5 lg:mt-[100px] mt-[40px] '>
                        <div className='w-full'>
                            <div>
                                <p className='text-5xl lg:text-7xl w-fit bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-600 bg-clip-text text-transparent font-[600]'>Hello, User.</p>
                                <p className='text-3xl lg:text-5xl w-fit text-gray-700/90 font-[600] mt-3'>How can I help you today?</p>
                            </div>

                            <div className='mt-[100px] w-full flex items-center justify-around lg:flex-nowrap flex-wrap gap-5'>
                                <div className='w-[250px] bg-blue-400/10 h-[200px] p-5 rounded-[15px] text-[15px] relative'>
                                    <p>Suggest a road map for the study or daily routine plan</p>
                                    <i className='absolute bottom-3 right-3 bg-gray-500/40 h-5 w-5 p-5 flex items-center justify-center rounded-full text-[16px] fa fa-compass'></i>
                                </div>
                                <div className='w-[250px] bg-blue-400/10 h-[200px] p-5 rounded-[15px] text-[15px] relative'>
                                    <p>Briefly summarise this concept; reciprocal motion</p>
                                    <i className='absolute bottom-3 right-3 bg-gray-500/40 h-5 w-5 p-5 flex items-center justify-center rounded-full text-[16px] fa fa-lightbulb'></i>
                                </div>
                                <div className='w-[250px] bg-blue-400/10 h-[200px] p-5 rounded-[15px] text-[15px] relative'>
                                    <p>Brainstrom team bonding activities for our work retreat</p>
                                    <i className='absolute bottom-3 right-3 bg-gray-500/40 h-5 w-5 p-5 flex items-center justify-center rounded-full text-[16px] fa fa-message'></i>
                                </div>
                                <div className='w-[250px] bg-blue-400/10 h-[200px] p-5 rounded-[15px] text-[15px] relative'>
                                    <p>Improve the readability of the following code</p>
                                    <i className='absolute bottom-3 right-3 bg-gray-500/40 h-5 w-5 p-5 flex items-center justify-center rounded-full text-[16px] fa fa-code'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className='w-full'>
                        <div className='w-[90vw] lg:w-[60vw] m-auto'>
                            <div className='my-[10px] lg:my-[40px] w-full flex items-center justify-end'>
                                <p className=' w-fit py-2 px-3 rounded-md que-animation bg-gray-500/40 '>{recentPrompt}</p>
                            </div>
                            {loading
                                ? <>
                                    <div>
                                        <div className='loader'>
                                            <hr className='dot' />
                                            <hr className='dot' />
                                            <hr className='dot' />
                                        </div>
                                    </div>
                                </>
                                : <div className='w-[100%] flex items-start flex-wrap lg:flex-nowrap gap-2 lg:gap-4 lg:mb-0'>
                                    <i className='bx bxs-sparkles text-[30px] text-blue-400 p-2'></i>
                                    <div
                                        className='mt-1 mb-[150px] p-3 text-gray-300/90 rounded-lg'
                                        dangerouslySetInnerHTML={{ __html: resultData }}
                                    >
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                }
            </div>
            <div className='w-[95%] lg:w-[50%] m-auto mt-[50px] mb-2 lg:mb-10 fixed bottom-0 lg:bottom-4 left-[2.5%] lg:left-[25%] '>
                <div className='w-full h-[8vh] lg:h-[6vh] flex items-center gap-5 bg-gray-950/95 border-2 border-gray-500/30 rounded-md hover:border-blue-500/80 hover:shadow-[0_0_5px_1px_#73A4FF] shadow-[0_0_5px_1px_#9d9d9d] p-2 '>
                    <input className='w-full h-full bg-transparent border-none pl-3 outline-none' type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter prompt here' />
                    <button onClick={() => { onSent() }} className='bg-blue-400/80 px-2 py-1 lg:px-3 lg:py-2 text-[18px] lg:text-[20px] rounded-lg hover:bg-blue-500/70 '>
                        <i className='fa fa-paper-plane'></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ChatBot

import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import { StoreContext } from './context/context'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Upload from './Pages/Upload'
import Library from './Pages/Library'
import ChatBot from './components/ChatBot'
import NotFound from './components/NotFound'
import SigninpopUp from './components/SigninPopUp'


const App = () => {
  const { token } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 3000);
  }
  return (
    <div>
      <ToastContainer />
      {!loading && (!token
        ? <SigninpopUp />
        : <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/library' element={<Library />} />
            <Route path='/ai' element={<ChatBot />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </>
      )}
    </div>
  )
}

export default App

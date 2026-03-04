import {  } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import './server'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'
import VanDetail from './Pages/VanDetail'

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className='flex justify-between items-center p-4 w-screen'>
          <div>
            <Link className="site-logo" to="/">#VanLife</Link>
          </div>
          <div className='flex gap-6'>
              <Link to='/vans'>Vans</Link>
              <Link to="/about">About</Link>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

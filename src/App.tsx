import { useState } from 'react'
import './App.css'
import Navbar from './components/sidebar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavbar from './components/navbar/TopNavbar'
import Home from './pages/Home'

function App() {

  const [show, setShow] = useState(false)
  return (
    <>
    <TopNavbar show={show} setShow={setShow}/>
    
     <Router>
        <Navbar show={show} setShow={setShow}/>
        <Routes>
          <Route path="/" element={<Home show={show}/>}/>
        </Routes>
     </Router>
      
    </>
  )
}

export default App

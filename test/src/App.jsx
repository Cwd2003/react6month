import React from 'react'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import About from './Layout/About'
import Fitnessgoal from './Layout/Fitnessgoal'
import Features from './Layout/Features'
import Master from './Layout/Master'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Master/> }>
         <Route path="/about" element={<About/> } />
                  <Route path="/about" element={<Features/> } />

         <Route path="/about" element={<Fitnessgoal/> } />


          
        </Route>
       
      </Routes>
      
      </BrowserRouter>
       {/* <Master/>
      <About/>
      <Fitnessgoal/>
      <Features/>
     */}
    
    </div>
  )
}

export default App

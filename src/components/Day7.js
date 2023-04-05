import React from 'react'
import About from './aboutrouter'
import Contact from './contactrouter'
import {BrowserRouter,Routes,Route,Router,Link} from "react-router-dom"
export default function Rott() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/Singer" element={<Singer/>}></Route>
   <Route path="/Album" element={<Album/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

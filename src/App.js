import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import {  Routes, Route}
    from 'react-router-dom';
import Home from './components/Home';
import Albums from './components/Albums';
import Singers from './components/Singers';
import NavBar from './components/Navbar'
import Usehook2 from './components/Day8';
import Day6 from './components/Day9';
import AxiosGet from './components/Day6';
import Login from './components/Submit';
import Submit from './components/Day10'
function App() {
return (
    <div>
    <br></br>
    <Day6/>
    <hr></hr>
    <br></br>
    <AxiosGet/>
    <hr></hr>
    <br></br>
    <Login/>
    <Submit/>
    <br>
    </br>
    <br></br>
    <hr></hr>
    <Usehook2/>
    <hr></hr>
    <NavBar />
    <Routes>
        <Route exact path='/ 'element={<Home />} />
        <Route path='/singers' element={<Singers/>} />
        <Route path='/albums' element={<Albums/>} />
    </Routes>
    
    </div>
);
}
  
export default App;
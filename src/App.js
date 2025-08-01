// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Membership from './Pages/Membership';
import Signup from './Pages/Signup';
import ViewMembers from './Pages/ViewMembers';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/membership' element={<Membership/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/viewmembers' element={<ViewMembers/>}/>
        {/* More pages will go here */}
      </Routes>
    </>
  );
}

export default App;

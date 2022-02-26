import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route , Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Todos from "./Todos";
import Navbar from "./Navbar";



function App() {

  return (
    <>
      <Navbar />
        
      <Routes>
        <Route path="/Todos" element={<Todos />} />
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
 
    </>
  );
}

export default App;

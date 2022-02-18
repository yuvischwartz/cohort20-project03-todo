import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Todos from "./Todos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Todos" element={<Todos />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      {/* <Link to="/About">About</Link>
      <Link to="/Todos" className={'border bg-blue-500'}>Todos</Link>
      <Link to="/Contact">Contact</Link> */}
      
      

      <Todos />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Todos from "./Todos";
// import Button from "./Button";


function App() {

  return (
    <>
      <div className={''}>
        <ul className={'grid justify-items-center sm:w-screen sm:flex sm:justify-start sm:gap-20 bg-white  text-lg m-3'}>
                
                <li className={'logo text-black sm:p-2 text-2xl hover:text-rose-400'}>
                  <i className={'fa-solid fa-braille sm:pl-5 pr-2 text-rose-400'}></i>
                  <Link to="/About">Task Manager</Link>  
                </li>
                  <li className={'text-black sm:p-2 sm:pl-5 hover:text-black hover:font-medium '}>
                  <Link to="/About">About</Link>
                </li>
                <li className={'text-black sm:p-2 hover:text-black hover:font-medium sm:block'}>
                  <Link to="/Todos">To-do's</Link>
                </li>
                <li className={'text-black sm:p-2 hover:text-black hover:font-medium sm:block'}>
                  <Link to="/Contact">Contact</Link>
          </li>  
          
        </ul>
        
      </div>  
      <Routes>
        <Route path="/Todos" element={<Todos />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      
      
    </>
  );
}

export default App;

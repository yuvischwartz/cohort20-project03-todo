import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Todos from "./Todos";
import TodoItem from "./TodoItem";

function App() {
  return (
    <>
      <div>
            <ul className={'w-screen bg-black flex justify-start gap-4'}>
                <li className={'text-white p-2'}>
                  <Link to="/About">About</Link>
                </li>

                <li className={'text-white bg-blue-500 p-2'}>
                  <Link to="/Todos">Todos</Link>
                </li>

                <li className={'text-white p-2'}>
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

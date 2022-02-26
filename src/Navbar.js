import React from 'react';
import { Routes, Route , Link} from "react-router-dom";


function Navbar() {


    return (
        <>
            <ul className={'grid justify-items-center sm:w-screen sm:flex sm:justify-start sm:gap-20 bg-white  text-lg m-3'}>
                
                <li className={'logo text-black sm:p-2 text-2xl hover:text-rose-400'}>
                  <i className={'fa-solid fa-braille sm:pl-5 pr-2 text-rose-400'}></i>
                  <Link to="/">Task Manager</Link>  
                </li>
                  <li className={'text-black sm:p-2 sm:pl-5 hover:text-black hover:font-medium '}>
                  <Link to="/">About</Link>
                </li>
                <li className={'text-white sm:p-2 hover:text-white hover:font-medium hover:bg-sky-500 sm:block bg-sky-400 rounded'}>
                  <Link to="/Todos">To-do's</Link>
                </li>
                <li className={'text-black sm:p-2 hover:text-black hover:font-medium sm:block'}>
                  <Link to="/Contact">Contact</Link>
                </li>  
            </ul>  
        </>
    );
}

export default Navbar;


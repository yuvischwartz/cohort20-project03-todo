import React, {useState, useEffect} from 'react';
import Button from './Button';
import { Routes, Route, Link } from "react-router-dom";

function About(props) {
    return (
        <>
            <div className={'flex justify-center sm:mt-24'}>
                <div className={'w-3/4'}>
                <div className={'mb-10'}>
                    <h1 className={'logo text-4xl sm:text-7xl'}>The <span className={'text-sky-400'}>Easiest Way</span> To Manage Team Projects And Tasks</h1>
                </div>
                <div className={'m-5 sm:mb-20'}>
                    <p className={'text-md sm:text-lg'}>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, 
                        the way your team works is unique—accomplish it all with Trello.
                        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office,
                        the way your team works is unique—accomplish it all with Trello.
                        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office,
                        the way your team works is unique—accomplish it all with Trello.
                    </p>
                   
                </div>
                <div>
                        {/* <Button buttonText={'Get Started'} /> */}
                        <button className={'py-3 px-4 rounded bg-rose-400 text-white hover:bg-rose-500 font hover:text-2xl text-xl'}>
                        <Link to="/Todos">Get Started!</Link></button>
                </div>   
                </div>    
        </div>
     </>
    );
}

export default About;
// someFunc={props.getStartedButton}
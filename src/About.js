import React, {useState, useEffect} from 'react';
import Button from './Button';

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
                    <Button buttonText={'Get Started'}/>
                </div>   
                </div>    
        </div>
     </>
    );
}

export default About;
// someFunc={props.getStartedButton}
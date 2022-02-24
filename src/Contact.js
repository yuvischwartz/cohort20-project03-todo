import React, { useState, useEffect } from 'react';


function Contact(props) {

    return (
        <>
            
        <div className={'grid grid-cols-12 gap-4 h-screen'}>
                <div className={'col-span-12 sm:col-span-4 bg-sky-400 '}>
                    <h1 className={'logo text-3xl text-white mt-20 mb-6'}>Let's get in touch</h1>
                    <p className={'text-white text-md'}>We're open for any suggestion or just to have a chat!</p>

                    <div className={'text-white text-lg p-5'}>
                            <div><i className={"fa-solid fa-phone text-white text-3xl p-5"}></i></div>
                            <div><h2>Adress:</h2><p className={'text-md'}>3345 NW 167St 33178 NY</p></div>

                            <div><i className={"fa-solid fa-location-arrow text-white text-3xl p-5 "}></i></div>
                            <div><h2>Phone:</h2><p className={'text-md'}>+123 4544 98</p></div>

                            <div><i className={"fa-solid fa-at text-3xl text-white p-5"}></i></div>
                            <div><h2>Email:</h2><p className={'text-md'}>info@taskmanager.com</p></div>
                    </div>
                </div>
                <div className={'col-span-12 sm:col-span-8'}>
                    <h1 className={'logo text-3xl text-left mt-20 ml-8'}>Get in touch</h1>
                    
                    <form>
                     <span className="formtext">form</span>
    	             <input 
                        type="text" 
                        placeholder="Enter Company Name" 
                        required 
                            />
                            <button>Go!</button>
                            </form>
                </div>      
        </div>
            
        </>
    );
}

export default Contact;
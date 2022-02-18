import React, { useState, useEffect } from 'react';


function Todos(props) {
    
    return (
        <>
        <div>
            <ul className={'w-screen bg-black flex justify-start gap-4'}>
                <li className={'text-white p-2'}>
                    About
                </li>

                <li className={'text-white bg-blue-500 p-2'}>
                    Todos
                </li>

                <li className={'text-white p-2'}>
                    Contact
                </li>
             </ul>
        </div>
        <div className={'flex justify-center mt-24'}>
            <div className={'border w-1/2'}>

                <div className={'flex gap-3 justify-center p-4'}>
                        <input type="text" className={'border w-2/3 px-1 outline-none rounded'} placeholder={'Task..'}/>
                        <button className={'border p-1 w-1/3 border border-blue-400 rounded text-blue-400'}>Add</button>
                </div>


                <div className={'p-4'}>

                        <div className={'flex justify-between px-4 mt-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                <input type="checkbox"/>
                                <span className={'ml-2 text-sm font-semibold'}>Go to the Grocery</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash text-sm text-red-500"></i>
                            </div>

                        </div>

                        <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                <input type="checkbox"/>
                                <span className={'ml-2 text-sm font-semibold'}>Go to the Grocery</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash text-sm text-red-500"></i>
                            </div>

                        </div>

                        <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                <input type="checkbox"/>
                                <span className={'ml-2 text-sm font-semibold'}>Go to the Grocery</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash text-sm text-red-500"></i>
                            </div>

                        </div>


                </div>




            </div>


        </div>

        </>
    );
}

export default Todos;
import React, {useState, useEffect} from 'react';


function ExampleListItem(props) {
    return (
        <>
            <div className={'flex justify-between px-4 bg-yellow-50 p-2 border-b'}>
                            <div>
                                <input type="checkbox"/>
                                <span className={'ml-2 text-lg font'}>{props.exampleText}</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash text-md text-rose-600"></i>
                            </div>

            </div>
        </>
    );
}

export default ExampleListItem;
import React, { useState, useEffect } from 'react';


function Button(props) {

    const renderColor = () => {
        let color = 'py-3 px-4 rounded bg-rose-400 text-white hover:bg-rose-500 font hover:font-medium'
        if (props.color == 'blue') {
            color = 'py-3 px-4 rounded bg-sky-400 text-white hover:bg-sky-500 font hover:font-medium'
        }
        
        return color;
    }

    return (
        <>
            
            <button onClick={props.someFunc} className={renderColor()}>{props.buttonText}</button>
            
        </>
    );
}

export default Button;

// w-1/3
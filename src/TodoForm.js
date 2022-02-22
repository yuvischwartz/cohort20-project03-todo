import React, {useState, useEffect} from 'react';

function TodoForm(props) {
    return (
        <>
            <div>
                        <div className={'flex gap-3 justify-center p-4'}>
                        <input type="text" value={props.task} onChange={props.onInputChange} className={'border w-2/3 px-1 outline-none rounded'} placeholder={'Task..'}/>
                        <button onClick={props.onButtonClicked} className={'border p-1 w-1/3 border border-blue-400 rounded text-blue-400'}>Add</button>
                        </div>
            </div>
        </>
    );
}

export default TodoForm;

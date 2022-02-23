import React, {useState, useEffect} from 'react';

function TodoItem(props) {
    return (
        <>
            <li className={props.completedClassName(props.item.completed)}>
                       
                <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                    <input onClick={()=>props.onCompletedClick(props.item.completed,props.item.id)}type="checkbox"/>
                                    <span className={'ml-2 text-sm font text-lg font-medium'}>{props.item.task}</span>       
                            </div>
                            <div>
                                <button onClick={() => props.handleDeleteButton(props.item.id)}><i className="fa-solid fa-trash text-sm text-red-500"></i></button>
                            </div>
                </div>
                
            </li>
        </>
    );
}
// key={props.idx}
export default TodoItem;
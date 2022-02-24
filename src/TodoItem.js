import React, {useState, useEffect} from 'react';

function TodoItem(props) {
    return (
        <>
            <li className={props.completedClassName(props.item.completed)}>
                       
                <div className={'flex justify-between px-4 bg-rose-50 p-2 border-b border-black'}>
                            <div>
                                    <input onClick={()=>props.onCompletedClick(props.item.completed,props.item.id)}type="checkbox"/>
                                    <span className={'ml-2 font text-lg'}>{props.item.task}</span>       
                            </div>
                            <div>
                                <button onClick={() => props.handleDeleteButton(props.item.id)}><i className="fa-solid fa-trash text-md text-rose-600"></i></button>
                            </div>
                </div>
                
            </li>
        </>
    );
}
// key={props.idx}
export default TodoItem;
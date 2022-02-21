import React, { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";


function Todos(props) {
    
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState(false);
    const [id, setId] = useState(0);

    // useEffect(() => {
    //     if (completed) {
    //         setCompleted(false);
    //     }

    // }, [completed])
    
    //functions:

    const onInputChange = (event) => {
        console.log(event.currentTarget.value);
        setTask(event.currentTarget.value);
    }
    const onButtonClicked = () => {
        // setCompleted(true);
        let todoObj = { task: task, completed: completed , id: id};
        console.log(todoObj);
        setId(id + 1);
        setList([...list, todoObj]);
        console.log(list);
        console.log(id);
        console.log(completed);
        // setList([...list,])
    }
    // const onCompletedClick = (event) => {
    //     console.log('completed status is:', event.currentTarget.completed);
    //     // console.log(item.completed);
    //     // setCompleted(item[completed] = 'true');
    //     // console.log(item.completed);
    // }
    const handleDeleteButton = (id) => {
        console.log('id:',id);
        setList(list.filter(filteredListItem => filteredListItem.id !== id));
    }
    const completedClassName = (completed) => {
        if (completed === 'true') {
            return 'line-through';
        } else {
            return 'no-underline';
        }
    }
    const onCompletedClick2 = (item) => { 
        let listCopy = list;
        listCopy.map((copyItem) => { 
            if (item.id === copyItem.id) {
                if (copyItem.completed === true) {
                    setCompleted(copyItem.completed = true);
                } else {
                    setCompleted(copyItem.completed = false);
                }
                setList(listCopy);
            }
        })
        console.log(listCopy);
        
    }
    const onCompletedClick = (completed,id) => {
        console.log('completed button was pressed', completed);
        let listCopy = list;
        listCopy.map((copyItem) => {
            // if (copyItem.completed === 'true') {
            //     // setCompleted(copyItem.completed = 'false');
            // } else {
                if (copyItem.id === id) {
                    console.log('item', id, 'needs to be completed');
                    setCompleted(copyItem.completed = true);
                    console.log(copyItem.id,completed,copyItem.completed);
                }
            // }
        })

    }
    // [{task: 'Go to grocery',completed: false},{task: 'Go to grocery',completed: true}]
    return (
        <>
            
        <div className={'flex justify-center mt-24'}>
            <div className={'border w-1/2'}>

                <div className={'flex gap-3 justify-center p-4'}>
                        <input type="text" value={task} onChange={onInputChange} className={'border w-2/3 px-1 outline-none rounded'} placeholder={'Task..'}/>
                        <button onClick={onButtonClicked} className={'border p-1 w-1/3 border border-blue-400 rounded text-blue-400'}>Add</button>
                </div>

                <TodoItem />
                <div className={'p-4'}>
                        
                            {/* <div>
                                <input onClick={onCompletedClick} type="checkbox" />
                                <span className={'ml-2 text-sm font-semibold'}>Go to the Grocery</span>
                            </div> */}
                            
                            {/* <div>
                                <ul className={'flex inline ml-2 text-sm font-semibold '}>
                                {list && list.map((item, idx) => {
                                    return <li key={idx} className={item.completed ? 'line-through':'no-underline'}>
                                        
                                        <input onClick={console.log('the status is:',item.completed)} type="checkbox" />
                                        {item.task}
                                        <i onClick={handleDeleteButton} className="fa-solid fa-trash text-sm text-red-500"></i>
                                        </li>   
                                })}
                                </ul>
                            </div> */}
                            {/* <ul>
                                {list && list.map((listItem, idx) => {
                                        // return <li key={idx}>{listItem}</li>
                                        return <TodoItem key={idx} someFunc={onItemClick} listItem={listItem}/>
                                })}
                            </ul> */}
                        
                        {/* item.completed ? 'line-through' : 'no-underline' */}
                        <ul>
                        {list && list.map((item, idx) => {  
                        return <li key={idx} className={completedClassName(item.completed)}>
                        <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                    <input onClick={()=>onCompletedClick(item.completed,item.id)}type="checkbox"/>
                                    <span className={'ml-2 text-sm font-semibold'}>{item.task}</span>
                                    <p>id:</p> {item.id}
                                    <p>idx</p> {idx}
                                    
                            </div>
                            <div>
                                <button onClick={() => handleDeleteButton(item.id)}><i className="fa-solid fa-trash text-sm text-red-500"></i></button>
                            </div>

                            </div>
                        </li>
                        })}
                        </ul>


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
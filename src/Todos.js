import React, { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import Show from "./Show";
import TodoForm from "./TodoForm";


function Todos(props) {
    
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState(false);
    const [id, setId] = useState(0);
    const [toggle, setToggle] = useState(false);

    // [{task: 'Go to grocery',completed: false},{task: 'Go to grocery',completed: true}]

    useEffect(() => {
        if (completed) {
            setCompleted(false);
        }

    }, [completed])
    useEffect(() => {
        if (toggle) {
            setList(list);
            console.log('was here', list);
            setToggle(false)
        }

    }, [toggle])
    //functions:

    const onInputChange = (event) => {
        console.log(event.currentTarget.value);
        setTask(event.currentTarget.value);
    }

    const onButtonClicked = () => {
        let todoObj = { task: task, completed: completed , id: id};
        console.log(todoObj);
        setId(id + 1);
        setList([...list, todoObj]);
        setTask('');
        console.log(list);
        console.log(id);
        console.log(completed);
        // setList([...list,])
    }
  
    const handleDeleteButton = (id) => {
        console.log('id:',id);
        setList(list.filter(filteredListItem => filteredListItem.id !== id));
    }
    const completedClassName = (completed) => {
        if (completed === true) {
            return 'line-through';
        } else if(completed === false){
            return 'no-underline';
        }
    }

    const onCompletedClick = (completed,id) => {
        console.log('completed button was pressed', completed);
        let listCopy = list;
        listCopy.map((copyItem) => {
            if (copyItem.id === id) {
                console.log('item', id, 'needs to be completed');
                if (copyItem.completed === false) {
                    setCompleted(copyItem.completed = true);
                } else {
                    setCompleted(copyItem.completed = false);
                    console.log('changed to:', copyItem.completed);
                }
                    console.log(copyItem.id,completed,copyItem.completed);
                }
        })

    }
    const showActiveButton = () => {
        // setList(list);
        let activeList = list;
        setList(activeList.filter(filteredListItem => filteredListItem.completed === false));
        setToggle(true);
        // setList(list);
    }
    const showCompletedButton = () => {
        // setList(list);
        let completedList = list;
        setList(completedList.filter(filteredListItem => filteredListItem.completed === true));
        setToggle(true);
        // setList(list);
    }
    // const allButtonClicked = () => {
    //     let listCopy = list;
    //     setList(listCopy);
    // }
    
    // setList(list.filter(filteredListItem => filteredListItem.id !== id));

    

    return (
        <> 
        <div className={'flex justify-center mt-24'}>
            <div className={'border w-1/2'}>

                <TodoForm task={task}onButtonClicked={onButtonClicked} onInputChange={onInputChange}/>
            
                <div className={'p-4'}>
                        <ul>
                        {list && list.map((item, idx) => {  
                            return <TodoItem key={idx} item={item} completedClassName={completedClassName} onCompletedClick={onCompletedClick}
                                handleDeleteButton={handleDeleteButton}/>
                        })}
                        </ul>
                        <Show showActiveButton={showActiveButton} showCompletedButton={showCompletedButton}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Todos;


{/* <ul>
                        {list && list.map((item, idx) => {  
                        return <li key={idx} className={completedClassName(item.completed)}>
                        <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                    <input onClick={()=>onCompletedClick(item.completed,item.id)}type="checkbox"/>
                                    <span className={'ml-2 text-sm font-semibold'}>{item.task}</span>
                                    
                            </div>
                            <div>
                                <button onClick={() => handleDeleteButton(item.id)}><i className="fa-solid fa-trash text-sm text-red-500"></i></button>
                            </div>

                            </div>
                        </li>
                        })}
                        </ul> */}


                        {/* <div className={'flex justify-between px-4 bg-gray-100 p-2 border-b'}>
                            <div>
                                <input type="checkbox"/>
                                <span className={'ml-2 text-sm font-semibold'}>Go to the Grocery</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash text-sm text-red-500"></i>
                            </div>

                        </div> */}
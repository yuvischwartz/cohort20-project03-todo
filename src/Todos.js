import React, { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import Show from "./Show";
import TodoForm from "./TodoForm";
import ExampleListItem from "./ExampleListItem";

function Todos(props) {
    
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState(false);
    const [id, setId] = useState(0);
    const [toggle, setToggle] = useState(false);
   
    //My List:
    // [{task: 'Go to grocery',completed: false},{task: 'Go to grocery',completed: true}]

    useEffect(() => {
        seedTasks();
    }, [])

    useEffect(() => {
        if (toggle) {
            setList(list);
            console.log('was here', list);
            setToggle(false)
        }

    }, [toggle])
    

    const onInputChange = (event) => {
        console.log(event.currentTarget.value);
        setTask(event.currentTarget.value);
    }

    const onButtonClicked = () => {
        let todoObj = { task: task, completed: completed, id: id };
        console.log(todoObj);
        setId(id + 1);
        setList([...list, todoObj]);
        setTask('');
        console.log(list);
        console.log(id);
        console.log(completed);
    }
  
    const handleDeleteButton = (id) => {
        console.log('id:', id);
        setList(list.filter(filteredListItem => filteredListItem.id !== id));
    }

    
    const completedClassName = (completed) => {
        if (completed == true) {
            return 'line-through'
        } else {
            return 'no-underline'
        }
    }
  
    const onCompletedClick = (completed, id) => {
        console.log('completed button was pressed. the current value of completed is:', completed);
        let listCopy = list;
        setList(listCopy.map((copyItem) => {
            if (copyItem.id === id) {
                console.log('item number', id, 'needs to be completed');
                return {
                    ...copyItem,
                    completed: !copyItem.completed,
                    
                };
            }
            console.log('completed value is now changed to:', copyItem.completed);
            console.log('the list is now', list);
            return copyItem;
        }))

    }
 
    const showActiveButton = () => {
        let activeList = list;
        setList(activeList.filter(filteredListItem => filteredListItem.completed === false));
        // console.log('hellooooow was here');
        setToggle(true);
    }
    const showCompletedButton = () => {
        console.log('hey..');
        let completedList = list;
        setList(completedList.filter(filteredListItem => filteredListItem.completed === true));
        setToggle(true);
    }
    // const allButtonClicked = () => {
    //     let listCopy = list;
    //     setList(listCopy);
    // }
    
    // setList(list.filter(filteredListItem => filteredListItem.id !== id));

    const seedTasks = () => {
        
        if ((list.length < 1)) {
            // setExampleListToggle(1);
            return <>
                <h1 className={'font text-lg text-left font-semibold mb-3'}>Example List:</h1>
                <ExampleListItem exampleText={'Example to-do number 1'} />
                <ExampleListItem exampleText={'Example to-do number 2'} />
                <ExampleListItem exampleText={'Example to-do number 3'} />
                <ExampleListItem exampleText={'Example to-do number 4'} />
                <ExampleListItem exampleText={'Example to-do number 5'} />
            </>
        }
    }

    return (
        <> 
        <div className={'flex justify-center mt-14'}>
                  
                <div className={'w-1/2 h-fit'}>
                
                    <TodoForm task={task} onButtonClicked={onButtonClicked}  onInputChange={onInputChange}/>
            
                    <div className={'p-4'}>
                        <ul>
                            {seedTasks()}
    
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

// const onCompletedClick = (completed, id) => {
    //     console.log('completed button was pressed. the current value of completed is:', completed);
    //     let listCopy = list;
    //     listCopy.map((copyItem) => {
    //         if (copyItem.id === id) {
    //             console.log('item number', id, 'needs to be completed');
    //             if (copyItem.completed === false) {
    //                 setCompleted(copyItem.completed = true);
    //                 console.log('i was here (is false');
    //             } else {
    //                 console.log('i was here (else)');
    //                 setCompleted(copyItem.completed = false);
    //                 console.log('changed to:', copyItem.completed);
    //             }
    //                 console.log(copyItem.id,completed,'changed to:',copyItem.completed);
    //             }
    //     })

    // }


    // const onCompletedClick = () => {
    //     let copyList = list;
    //     setList(copyList.map(function (copyListitem) {
    //         if (item.id === todo.id) {
    //           return {
    //             ...item,
    //             completed: !item.completed,
    //           };
    //         }
    //         return item;
    //       })
    //     );)
    // }
        // useEffect(() => {
    //     if (completedClassName == 'no-underline') {
    //         setCompletedClassValue('line-through');
    //     } else {
    //         setCompletedClassValue('no-underline');
    //     }
    // }, [toggleCheckBoxButton])
    
    
    //functions:
        // useEffect(() => {
    //     if (completed) {
    //         setCompleted(false);
    //     }

    // }, [completed])

     // const [toggleCheckBoxButton, setToggleCheckBoxButton] = useState(false);
    // const [completedClassValue, setCompletedClassValue] = useState('no-underline');
    // const [exampleListToggle, setExampleListToggle] = useState(0);
import React, {useState, useEffect} from 'react';
import Button from './Button';

function Show(props) {
    return (
        <>
            <div>
                            
                <div className={'flex space-x-2 m-5'}>
                <p className={'font text-md'}>Show:</p>
                            <Button buttonText={'All'}  />
                            <Button buttonText={'Active'} someFunc={props.showActiveButton} />
                            <Button buttonText={'Completed'} someFunc={props.showCompletedButton}/>
                            </div>
            </div>
        </>
    );
}

export default Show;

       {/* <button className={'rounded bg-blue-400 p-2'}>All</button>
                                <button onClick={props.showActiveButton}className={'rounded bg-blue-400 p-2'}>Activ</button>
                    <button onClick={props.showCompletedButton} className={'rounded bg-blue-400 p-2'}>completed</button> */}
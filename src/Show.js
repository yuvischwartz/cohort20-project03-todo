import React, {useState, useEffect} from 'react';
import Button from './Button';

function Show(props) {
    return (
        <>
            <div>
                            
                <div className={'flex space-x-2 m-5'}>
                <p className={'font text-md'}>Show:</p>
                            <Button buttonText={'All'} someFunc={props.showActiveButton} />
                            <Button buttonText={'Active'} someFunc={props.showCompletedButton} />
                            <Button buttonText={'Completed'}/>
                            </div>
            </div>
        </>
    );
}

export default Show;

       {/* <button className={'rounded bg-blue-400 p-2'}>All</button>
                                <button onClick={props.showActiveButton}className={'rounded bg-blue-400 p-2'}>Activ</button>
                    <button onClick={props.showCompletedButton} className={'rounded bg-blue-400 p-2'}>completed</button> */}
import React, {useState, useEffect} from 'react';

function Show(props) {
    return (
        <>
            <div>
                            <p>Show:</p>
                            <div className={'flex space-x-2'}>
                                <button className={'rounded bg-blue-400 p-2'}>All</button>
                                <button onClick={props.showActiveButton}className={'rounded bg-blue-400 p-2'}>Activ</button>
                                <button onClick={props.showCompletedButton}className={'rounded bg-blue-400 p-2'}>completed</button>
                            </div>
            </div>
        </>
    );
}

export default Show;
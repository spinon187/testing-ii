import React from 'react';


const Display = props => {
    return (
        <div className='atBat'>
            <div className='balls'>
                <h2>Balls: {props.balls}</h2>
            </div>
            <div className='strikes'>
                <h2>Strikes: {props.strikes}</h2>
            </div>
            <div className='outs'>
                <h2>Outs: {props.outs}</h2>
            </div>
        </div>
    )
}

export default Display;
import React from 'react';
import './Gymers.css'
const Gymers = () => {
    return (
        <div className='gym-container'>
            <div className='select-container'>
                <h2>Select today’s exercise</h2>
            </div>
            <div className='completed-container'>
                <h2>Activity Completed</h2>
            </div>
        </div>
    );
};

export default Gymers;
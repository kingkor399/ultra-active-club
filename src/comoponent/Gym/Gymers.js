import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gymers.css'
const Gymers = () => {
    const [exercises,setExercises] = useState([]);
    useEffect( () =>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    return (
        <div className='gym-container'>
            <div className='select-container'>
                {
                    exercises.map(exercise => <Exercise
                    key = {exercise.id}
                    exercise = {exercise}
                    ></Exercise> )
                }
            </div>
            <div className='completed-container'>
                <h2>Activity Completed</h2>
            </div>
        </div>
    );
};

export default Gymers;
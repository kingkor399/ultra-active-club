import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import logo from '../../images/logo.png'
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
                 <img src={logo}></img>
                <div>
                <h4>Abdur Rahman</h4>
                <h5>Narshingdi Bangladesh</h5>
                </div>
                <div className='my-information'>
                    <h5>Weight: 60kg</h5>
                    <h5>Height: 4.5</h5>
                    <h5>Age: 18</h5>
                </div>
                <div>
                    <h3>Add A Break</h3>
                </div>
                <div>
                    <h3>Exercise Details</h3>
                    <h4 className='Exercise-time'>Exercise time</h4>
                    <h4 className='Break-time'>Break time</h4>
                </div>
            </div>
        </div>
    );
};

export default Gymers;
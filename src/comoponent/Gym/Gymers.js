import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gymers.css'
import List from '../list/List';
const Gymers = () => {
    const [exercises,setExercises] = useState([]);
    const [time,setTime] = useState([])
    useEffect( () =>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    const handleAddTolist = (exercise) =>{
        const newTime = [...time,exercise]
        setTime(newTime)
    }
    return (
        <div className='gym-container'>
            <div className='select-container'>
                {
                    exercises.map(exercise => <Exercise
                    key = {exercise.id}
                    exercise = {exercise}
                    handleAddTolist = {handleAddTolist}
                    ></Exercise> )
                }
            </div>
            <div className='completed-container'>
                <List time={time}></List>
            </div>
        </div>
    );
};

export default Gymers;
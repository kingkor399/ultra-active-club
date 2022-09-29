import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {name,age,img,Time} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img}></img>
            <p className='name-text'>Name: {name}</p>
            <p></p>
            <p>Age: {age}</p>
            <p>Time required: {Time}</p>
        </div>
    );
};

export default Exercise;
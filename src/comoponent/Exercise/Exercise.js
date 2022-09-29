import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {name,age,img,Time} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img}></img>
            <div>
            <p className='name-text'>Name: {name}</p>
            <p>Times a week I do exercise in the evening, so I can stay strong and ... daily routine is a little boring – 
                but on weekends and holidays I love to fly...
            </p>
            <p>Age: {age}</p>
            <p>Time required: {Time}</p>
            </div>
            <button className='btn-cart'>
                <h3>Add To List</h3>
            </button>
        </div>
    );
};

export default Exercise;
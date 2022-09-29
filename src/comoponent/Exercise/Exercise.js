import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {name,age,img,Time} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img}></img>
            <div>
            <h4 className='name-text'>{name}</h4>
            <p>Times a week I do exercise in the evening, so I can stay strong and ... daily routine is a little boring – 
                but on weekends and holidays I love to fly...
            </p>
            <h5>Time required: {Time}m</h5>
            </div>
            <button className='btn-cart'>
                <h3>Add To List</h3>
            </button>
        </div>
    );
};

export default Exercise;
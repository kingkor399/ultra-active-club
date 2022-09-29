import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <footer className='question-text'>
            <h2>Question & Answer</h2>
            <h3><u>Question:</u> How does react work?</h3>
            <h4><u>Answer:</u> React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</h4>
            <h3><u>Question:</u> Props and State Different?</h3>
            <h4><u>Answer:</u> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</h4>
            <h3><u>Question:</u> useEffect dataload except What else?</h3>
            <h4><u>Answer:</u> useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</h4>
        </footer>
    );
};

export default Question;
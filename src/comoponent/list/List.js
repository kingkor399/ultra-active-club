import React from 'react';
import logo from '../../images/logo.png'
import './List.css'
const List = (props) => {
    const {time} = props;
    let timeRequired = 0;
    for(const exercise of time){
        timeRequired = timeRequired + parseInt(exercise.Time);
    }

    return (
        <div>
            <img src={logo}></img>
            <div>
                <h4>Abdur Rahman</h4>
                <h5>Narshingdi Bangladesh</h5>
                </div>
                <div className='my-information'>
                    <h5>Weight: 55kg</h5>
                    <h5>Height: 4.5</h5>
                    <h5>Age: 18</h5>
                    </div>
                    <div>
                        <h3>Add A Break</h3>
                        <div className='time-btn'>
                            <button>10s</button>
                            <button>20s</button>
                            <button>30s</button>
                            <button>40s</button>
                            <button>50s</button>
                        </div>
                        </div>
                        <div>
                            <h3>Exercise Details</h3>
                            <h4 className='Exercise-time'>Exercise time {timeRequired}m</h4>
                            <h4 className='Break-time'>Break time</h4>
                        </div>
        </div>
    );
};

export default List;
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    let { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                style={{ marginLeft: '2rem' , size: 10}}
                id='b_value'
                min= {budget}
                max= {20000}
                step={10}
                onChange={(event) => budget(event.value)}>
                </input>
        </div>
    );

};

export default Budget;
import React from 'react';
import {func} from 'prop-types';

const ToDoInput = ({onAddItem}) => {
    const onClick = () => {
        onAddItem('text');
    };

    return (
        <div>
            <input type='text' placeholder='add task' />
            <button onClick={onClick}>Add</button>
        </div>
    );
};

ToDoInput.propTypes = {
    onAddItem: func.isRequired
};

export default ToDoInput;
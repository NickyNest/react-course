import React from 'react';
import {string} from 'prop-types';

let isDoneCheckbox = null;

const handleChange = () => {
    console.log(isDoneCheckbox.checked);
};

const ToDoItem = ({item}) => (
    <div>
        <input type='checkbox' ref={name => { isDoneCheckbox = name; }} onChange={handleChange} />
        {item}
        <button>X</button>
    </div>
);

ToDoItem.propTypes = {
    item: string
};

ToDoItem.defaultProps = {
    item: ''
};

export default ToDoItem;
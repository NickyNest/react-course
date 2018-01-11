import React from 'react';
import {string} from 'prop-types';

const ToDoItem = ({item}) => (
    <div>
        <input type='checkbox' />
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
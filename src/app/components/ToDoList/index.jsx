import React from 'react';
import ToDoItem from 'components/ToDoItem';
import {arrayOf, string} from 'prop-types';

const ToDoList = ({items}) => (
    <div>
        {items.map(item => <ToDoItem key={item} item={item} />)}
    </div>
);

ToDoList.propTypes = {
    items: arrayOf(string)
};

ToDoList.defaultProps = {
    items: []
};

export default ToDoList;
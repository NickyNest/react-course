import React from 'react';
import ToDoItem from 'components/ToDoItem';
import {arrayOf, shape, number, string, bool} from 'prop-types';

const ToDoList = ({items}) => (
    <div>
        {items.map(item => <ToDoItem key={item.id} item={item} />)}
    </div>
);

ToDoList.propTypes = {
    items: arrayOf(shape({
        id: number,
        text: string,
        isChecked: bool
    }))
};

ToDoList.defaultProps = {
    items: []
};

export default ToDoList;
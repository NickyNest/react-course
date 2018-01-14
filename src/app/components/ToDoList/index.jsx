import React from 'react';
import ToDoItem from 'components/ToDoItem';
import {arrayOf, shape, number, string, bool, func} from 'prop-types';

const ToDoList = ({items, onCheckChange, onRemoveItem}) => (
    <div>
        {items.map(item =>
            <ToDoItem key={item.id} item={item} onCheckChange={onCheckChange} onRemoveItem={onRemoveItem} />)}
    </div>
);

ToDoList.propTypes = {
    items: arrayOf(shape({
        id: number,
        text: string,
        isChecked: bool
    })),
    onCheckChange: func.isRequired,
    onRemoveItem: func.isRequired
};

ToDoList.defaultProps = {
    items: []
};

export default ToDoList;
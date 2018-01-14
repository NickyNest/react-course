import React from 'react';
import {shape, number, string, bool, func} from 'prop-types';
import './index.css';

const ToDoItem = ({item, onCheckChange, onRemoveItem}) => {
    const handleCheck = () => {
        onCheckChange(item.id);
    };

    const handleClick = () => {
        onRemoveItem(item.id);
    };

    const className = item.isChecked ? 'throw-text' : '';
    return (
        <div>
            <input type='checkbox' onClick={handleCheck} />
            <span className={className}>{item.text}</span>
            <button onClick={handleClick}>X</button>
        </div>
    );
};

ToDoItem.propTypes = {
    item: shape({
        id: number,
        text: string,
        isChecked: bool
    }),
    onCheckChange: func.isRequired,
    onRemoveItem: func.isRequired
};

ToDoItem.defaultProps = {
    item: {}
};

export default ToDoItem;
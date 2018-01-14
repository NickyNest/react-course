import React from 'react';
import {shape, number, string, bool, func} from 'prop-types';
import './index.css';

const ToDoItem = ({item, onCheckChange}) => {
    const handleCheck = () => {
        onCheckChange(item.id);
    };

    const className = item.isChecked ? 'throw-text' : '';
    return (
        <div>
            <input type='checkbox' onClick={handleCheck} />
            <span className={className}>{item.text}</span>
            <button>X</button>
        </div>
    );
};

ToDoItem.propTypes = {
    item: shape({
        id: number,
        text: string,
        isChecked: bool
    }),
    onCheckChange: func.isRequired
};

ToDoItem.defaultProps = {
    item: {}
};

export default ToDoItem;
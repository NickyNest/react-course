import React from 'react';
import {Checkbox} from 'semantic-ui-react';
import {shape, number, string, bool, func} from 'prop-types';
import './index.css';

const ToDoItem = ({item, onCheckChange, onRemoveItem}) => (
    <div>
        <Checkbox toggle onChange={() => onCheckChange(item.id)} />
        <span className={item.isChecked ? 'throw-text' : ''}>{item.text}</span>
        <button onClick={() => onRemoveItem(item.id)}>X</button>
    </div>
);

ToDoItem.propTypes = {
    item: shape({
        id: number.isRequired,
        text: string.isRequired,
        isChecked: bool.isRequired
    }).isRequired,
    onCheckChange: func.isRequired,
    onRemoveItem: func.isRequired
};

export default ToDoItem;
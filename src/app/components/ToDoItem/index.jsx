import React from 'react';
import {Checkbox} from 'semantic-ui-react';
import {shape, string, bool, date, func} from 'prop-types';
import './index.css';

const ToDoItem = ({task, onCheckChange, onRemoveItem}) => (
    <div>
        <Checkbox toggle checked={task.completed} onChange={() => onCheckChange(task.id)} />
        <span className={task.completed ? 'throw-text' : ''}>{task.title} {task.createdDate}</span>
        <button onClick={() => onRemoveItem(task.id)}>X</button>
    </div>
);

ToDoItem.propTypes = {
    task: shape({
        id: string.isRequired,
        title: string.isRequired,
        completed: bool.isRequired,
        createdDate: date
    }).isRequired,
    onCheckChange: func.isRequired,
    onRemoveItem: func.isRequired
};

export default ToDoItem;
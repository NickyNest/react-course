import React from 'react';
import {Checkbox} from 'semantic-ui-react';
import {shape, string, bool, instanceOf, func} from 'prop-types';
import './index.css';

const Task = ({task, onCheckChange, onRemoveTask}) => (
    <div>
        <Checkbox toggle checked={task.completed} onChange={(e, {checked}) => onCheckChange(task.id, checked)} />
        <span className={task.completed ? 'throw-text' : ''}>{task.title}</span>&nbsp;&nbsp;
        <span>{task.createdDate.toLocaleDateString()}</span>
        <button onClick={() => onRemoveTask(task.id)}>X</button>
    </div>
);

Task.propTypes = {
    task: shape({
        id: string.isRequired,
        title: string.isRequired,
        completed: bool.isRequired,
        createdDate: instanceOf(Date).isRequired
    }).isRequired,
    onCheckChange: func.isRequired,
    onRemoveTask: func.isRequired
};

export default Task;
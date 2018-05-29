import React from 'react';
import TaskTag from 'components/TaskTag';
import {Checkbox} from 'semantic-ui-react';
import {shape, string, bool, instanceOf, func} from 'prop-types';
import './index.css';

const Task = ({task, onCheckChange, onRemoveTask, onAddTaskTag, onRemoveTaskTag}) => {
    const onDrop = (e, taskId) => {
        const tagId = e.dataTransfer.getData('id');
        if (task.tags.find(taskTag => taskTag.tagId === tagId)) {
            return;
        }

        onAddTaskTag(tagId, taskId);
    };

    return (
        <div>
            <Checkbox toggle checked={task.completed} onChange={(e, {checked}) => onCheckChange(task.id, checked)} />
            <span
                className={task.completed ? 'throw-text' : ''}
                onDragOver={e => e.preventDefault()}
                onDrop={e => onDrop(e, task.id)}>{task.title}
            </span>&nbsp;&nbsp;
            <span>{task.createdDate.toLocaleDateString()}</span>&nbsp;&nbsp;
            {task.tags.length === 0 ? '' : task.tags.map(tag => <TaskTag key={tag.tagId} taskTag={tag} onRemoveTaskTag={onRemoveTaskTag} />)}
            <button onClick={() => onRemoveTask(task.id)}>X</button>
        </div>
    );
};

Task.propTypes = {
    task: shape({
        id: string.isRequired,
        title: string.isRequired,
        completed: bool.isRequired,
        createdDate: instanceOf(Date).isRequired
    }).isRequired,
    onCheckChange: func.isRequired,
    onRemoveTask: func.isRequired,
    onAddTaskTag: func.isRequired,
    onRemoveTaskTag: func.isRequired
};

export default Task;
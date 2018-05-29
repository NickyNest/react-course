import React from 'react';
import {Label, Icon} from 'semantic-ui-react';
import {shape, string, func} from 'prop-types';

const TaskTag = ({taskTag, onRemoveTaskTag}) =>
    (<Label color='teal' tag>{taskTag.title}
        <Icon name='delete' color='red' onClick={() => onRemoveTaskTag(taskTag.id)} /></Label>);

TaskTag.propTypes = {
    taskTag: shape({
        tagId: string.isRequired,
        title: string.isRequired
    }).isRequired,
    onRemoveTaskTag: func.isRequired
};

export default TaskTag;
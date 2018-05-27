import React from 'react';
import {Label, Icon} from 'semantic-ui-react';
import {shape, string} from 'prop-types';

const TaskTag = ({taskTag}) =>
    <Label color='teal' tag>{taskTag.title} <Icon name='delete' /></Label>;

TaskTag.propTypes = {
    taskTag: shape({
        tagId: string.isRequired,
        title: string.isRequired
    }).isRequired
};

export default TaskTag;
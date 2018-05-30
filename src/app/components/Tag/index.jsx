import React from 'react';
import {Label, Icon} from 'semantic-ui-react';
import {shape, string, number, func} from 'prop-types';
import './index.css';

const Tag = ({tag, onRemoveTag}) => {
    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };

    return (
        <div className='tag'>
            <Label basic color='teal' draggable onDragStart={e => onDragStart(e, tag.id)}>{tag.title}
                <Icon name='delete' color='red' onClick={() => onRemoveTag(tag.id)} />
                <Label.Detail>{tag.count}</Label.Detail>
            </Label>
        </div>
    );
};

Tag.propTypes = {
    tag: shape({
        id: string.isRequired,
        title: string.isRequired,
        count: number.isRequired
    }).isRequired,
    onRemoveTag: func.isRequired
};

export default Tag;
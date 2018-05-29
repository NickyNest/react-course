import React from 'react';
import {Label, Icon} from 'semantic-ui-react';
import {shape, string} from 'prop-types';
import './index.css';

const Tag = ({tag}) => {
    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };

    return (
        <div className='tag'>
            <Label basic color='teal' draggable onDragStart={e => onDragStart(e, tag.id)}>{tag.title}
                <Icon name='delete' color='red' />
                <Label.Detail>5</Label.Detail>
            </Label>
        </div>
    );
};

Tag.propTypes = {
    tag: shape({
        id: string.isRequired,
        title: string.isRequired
    }).isRequired
};

export default Tag;
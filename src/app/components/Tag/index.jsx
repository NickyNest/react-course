import React from 'react';
import {Label, Icon} from 'semantic-ui-react';
import {shape, string} from 'prop-types';
import './index.css';

const Tag = ({tag}) => (
    <div className='tag'>
        <Label basic color='teal'>{tag.title}
            <Icon name='delete' />
            <Label.Detail>5</Label.Detail>
        </Label>
    </div>
);

Tag.propTypes = {
    tag: shape({
        id: string.isRequired,
        title: string.isRequired
    }).isRequired
};

export default Tag;
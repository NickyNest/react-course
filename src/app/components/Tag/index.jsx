import React from 'react';
import {shape, string} from 'prop-types';

const Tag = ({tag}) => (
    <div>
        <span>{tag.title}</span>
    </div>
);

Tag.propTypes = {
    tag: shape({
        id: string.isRequired,
        title: string.isRequired
    }).isRequired
};

export default Tag;
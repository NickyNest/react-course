import React from 'react';
import Tag from 'components/Tag';
import {shape, arrayOf, string} from 'prop-types';

const TagContainer = ({tags}) => (
    <div>
        <span>Hello from tags:</span>
        {tags.length === 0 ? 'huh' : tags.map(tag => <Tag key={tag.id} tag={tag} />)}
    </div>
);

TagContainer.propTypes = {
    tags: arrayOf(shape({
        id: string.isRequired,
        title: string.isRequired
    })).isRequired
};

export default TagContainer;
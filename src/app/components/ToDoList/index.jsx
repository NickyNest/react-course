import React from 'react';
import ToDoItem from 'components/ToDoItem';
import PropTypes from 'prop-types';

const ToDoList = ({items}) => (
    <div>
        {items.map(item => <ToDoItem key={item} item={item} />)}
    </div>
);

ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

ToDoItem.defaultProps = {
    items: []
};

export default ToDoList;
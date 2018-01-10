import React from 'react';
import string from 'prop-types';

const ToDoTitle = ({className}) => <h3 className={className}>Simple To-Do application</h3>;

ToDoTitle.propTypes = {
    className: string
};

ToDoTitle.defaultProps = {
    className: ''
};

export default ToDoTitle;
import React, {Component} from 'react';
import ToDoTitle from 'components/ToDoTitle';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return (
            <ToDoTitle className='Todo-title' />
        );
    }
}

export default ToDoContainer;
import React, {Component} from 'react';
import ToDoTitle from 'components/ToDoTitle';
import ToDoList from 'components/ToDoList';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['item1', 'item2', 'item3']
        };
    }

    render() {
        return (
            <div>
                <ToDoTitle className='Todo-title' />
                <ToDoList items={this.state.items} />
            </div>
        );
    }
}

export default ToDoContainer;
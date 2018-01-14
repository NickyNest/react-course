import React, {Component} from 'react';
import ToDoTitle from 'components/ToDoTitle';
import ToDoList from 'components/ToDoList';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, text: 'item1', isChecked: false},
                {id: 2, text: 'item2', isChecked: true},
                {id: 3, text: 'item3', isChecked: false}
            ]
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
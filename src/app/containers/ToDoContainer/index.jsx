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
                {id: 2, text: 'item2', isChecked: false},
                {id: 3, text: 'item3', isChecked: false}
            ]
        };
    }

    onCheckChange = id => {
        const newItems = [...this.state.items];
        const index = newItems.findIndex(item => item.id === id);
        newItems[index].isChecked = !newItems[index].isChecked;

        this.setState({items: newItems});
    };

    onRemoveItem = id => {
        this.setState({items: this.state.items.filter(item => item.id !== id)});
    };

    render() {
        return (
            <div>
                <ToDoTitle className='Todo-title' />
                <ToDoList items={this.state.items} onCheckChange={this.onCheckChange} onRemoveItem={this.onRemoveItem} />
            </div>
        );
    }
}

export default ToDoContainer;
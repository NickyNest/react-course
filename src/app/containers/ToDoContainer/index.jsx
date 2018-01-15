import React, {Component} from 'react';
import ToDoTitle from 'components/ToDoTitle';
import ToDoInput from 'components/ToDoInput';
import ToDoList from 'components/ToDoList';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    onAddItem = text => {
        const maxId = this.state.items.length > 0 ? Math.max(...this.state.items.map(item => item.id)) : 0;
        const newItem = {id: maxId + 1, text, isChecked: false};
        this.setState({items: [...this.state.items, newItem] });
    };

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
                <ToDoInput onAddItem={this.onAddItem} />
                <ToDoList items={this.state.items} onCheckChange={this.onCheckChange} onRemoveItem={this.onRemoveItem} />
            </div>
        );
    }
}

export default ToDoContainer;
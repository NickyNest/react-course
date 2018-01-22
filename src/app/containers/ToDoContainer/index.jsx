import React, {Component} from 'react';
import ToDoInput from 'components/ToDoInput';
import ToDoItem from 'components/ToDoItem';
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

    // onCheckChange = id => {
    //     const newItems = [...this.state.items];
    //     const index = newItems.findIndex(item => item.id === id);
    //     newItems[index].isChecked = !newItems[index].isChecked;

    //     this.setState({items: newItems});
    // };

    onCheckChange = id => {
        const {items} = this.state;
        const itemIndex = items.findIndex(item => item.id === id);
        const newItems = [
            ...items.slice(0, itemIndex),
            {...items[itemIndex], isChecked: !items[itemIndex].isChecked},
            ...items.slice(itemIndex + 1, items.length)
        ];
        this.setState({items: newItems});
    };

    onRemoveItem = id => {
        this.setState({items: this.state.items.filter(item => item.id !== id)});
    };

    mapToDoItemList = items => (
        <div>
            {
                items.map(item =>
                    <ToDoItem key={item.id} item={item} onCheckChange={this.onCheckChange} onRemoveItem={this.onRemoveItem} />)
            }
        </div>
    );

    render() {
        const {items} = this.state;
        return (
            <div>
                <h3 className='Todo-title'>Simple To-Do application</h3>
                <ToDoInput onAddItem={this.onAddItem} />
                {items.length === 0 ? 'huhЪ' : this.mapToDoItemList(items)}
            </div>
        );
    }
}

export default ToDoContainer;
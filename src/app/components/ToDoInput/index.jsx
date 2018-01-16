import React, {Component} from 'react';
import {func} from 'prop-types';

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
    }

    onChange = e => {
        this.setState({task: e.target.value});
    };

    onClick = () => {
        if (!this.state.task) {
            return;
        }
        this.props.onAddItem(this.state.task);
        this.setState({task: ''});
    };

    render() {
        return (
            <div>
                <input type='text' placeholder='add task' onChange={e => this.onChange(e)} value={this.state.task} />
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

ToDoInput.propTypes = {
    onAddItem: func.isRequired
};

export default ToDoInput;
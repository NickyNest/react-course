import React, {Component} from 'react';
import {func} from 'prop-types';

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
    }

    onChange = ({target}) => this.setState({task: target.value});

    onClick = () => {
        const {task} = this.state;
        if (!task) {
            return;
        }
        this.props.onAddItem(task);
        this.setState({task: ''});
    };

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='add task'
                    onChange={this.onChange}
                    value={this.state.task}
                    onKeyPress={({key}) => key === 'Enter' ? this.onClick() : ''} />
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

ToDoInput.propTypes = {
    onAddItem: func.isRequired
};

export default ToDoInput;
import React, {Component} from 'react';
import {func} from 'prop-types';
import {Input} from 'semantic-ui-react';

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
                <Input
                    focus
                    placeholder='add task'
                    onChange={this.onChange}
                    value={this.state.task}
                    onKeyPress={({key}) => key === 'Enter' ? this.onClick() : ''}
                    action={{primary: true, content: 'Add', onClick: this.onClick}} />
            </div>
        );
    }
}

ToDoInput.propTypes = {
    onAddItem: func.isRequired
};

export default ToDoInput;
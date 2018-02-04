import React, {Component} from 'react';
import {func} from 'prop-types';
import {Input} from 'semantic-ui-react';

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    onChange = ({target}) => this.setState({title: target.value});

    onClick = () => {
        const {title} = this.state;
        if (!title) {
            return;
        }
        this.props.onAddTask(title);
        this.setState({title: ''});
    };

    render() {
        return (
            <div>
                <Input
                    focus
                    placeholder='add task'
                    onChange={this.onChange}
                    value={this.state.title}
                    onKeyPress={({key}) => key === 'Enter' ? this.onClick() : ''}
                    action={{primary: true, content: 'Add', onClick: this.onClick}} />
            </div>
        );
    }
}

TaskInput.propTypes = {
    onAddTask: func.isRequired
};

export default TaskInput;
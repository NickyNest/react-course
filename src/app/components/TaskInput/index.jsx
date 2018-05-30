import React, {Component} from 'react';
import {func, string} from 'prop-types';
import {Input} from 'semantic-ui-react';

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    onChange = ({target}) => this.setState({title: target.value});

    onKeyPress = ({key}) => key === 'Enter' ? this.onClick() : '';

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
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                    value={this.state.title}
                    onKeyPress={this.onKeyPress}
                    action={{primary: true, content: 'Add', onClick: this.onClick}} />
            </div>
        );
    }
}

TaskInput.propTypes = {
    onAddTask: func.isRequired,
    placeholder: string.isRequired
};

export default TaskInput;
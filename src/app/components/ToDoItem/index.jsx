import React, {Component} from 'react';
import {shape, number, string, bool} from 'prop-types';
import './index.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        const className = this.state.isChecked ? 'throw-text' : '';
        return (
            <div>
                <input type='checkbox' onClick={this.handleChange} />
                <span className={className}>{this.props.item.text}</span>
                <button>X</button>
            </div>
        );
    }
}

ToDoItem.propTypes = {
    item: shape({
        id: number,
        text: string,
        isChecked: bool
    })
};

ToDoItem.defaultProps = {
    item: {}
};

export default ToDoItem;
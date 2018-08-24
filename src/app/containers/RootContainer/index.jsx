import React, {Component} from 'react';
import MainPage from 'containers/MainPage';
import TaskList from 'containers/TaskList';
import {shape, string, bool, instanceOf, func, arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions';

class RootContainer extends Component {
    componentDidMount() {
        // const {dispatch} = this.props;
        // dispatch(fetchTasks());
    }

    render() {
        return (
            <div>
                <MainPage />
                <TaskList />
            </div>
        );
    }
}

// RootContainer.propTypes = {
//     dispatch: func.isRequired,
//     tasks: arrayOf(shape({
//         id: string.isRequired,
//         title: string.isRequired,
//         completed: bool.isRequired,
//         createdDate: instanceOf(Date).isRequired
//     })).isRequired
// };

// const mapStateToProps = state => (
//     {tasks: state.tasks}
// );

export default RootContainer;
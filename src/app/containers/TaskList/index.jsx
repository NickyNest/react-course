import React, {Component} from 'react';
import Task from 'components/Task';
import {shape, string, bool, instanceOf, func, arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions';
import getFilteredTasks from './selector';

class TaskList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTasks());
    }

    mapToDoTaskList = tasks => (
        <div>
            {
                tasks.map(task =>
                    (<Task
                        key={task.id}
                        task={task}
                        onCheckChange={this.fake}
                        onRemoveTask={this.fake}
                        onAddTaskTag={this.fake}
                        onRemoveTaskTag={this.fake} />))
            }
        </div>
    );

    fake = () => {};

    render() {
        const {tasks, isFetching} = this.props;
        return (
            <div>
                {isFetching && tasks.length === 0 && <h3>Loading...</h3>}
                {!isFetching && tasks.length === 0 && <h3>No tasks</h3>}
                {tasks.length > 0 && <span>Total: {tasks.length}</span>}
                {tasks.length > 0 && this.mapToDoTaskList(tasks)}
            </div>
        );
    }
}

TaskList.propTypes = {
    dispatch: func.isRequired,
    isFetching: bool.isRequired,
    tasks: arrayOf(shape({
        id: string.isRequired,
        title: string.isRequired,
        completed: bool.isRequired,
        createdDate: instanceOf(Date).isRequired
    })).isRequired
};

const mapStateToProps = state => ({
    tasks: getFilteredTasks(state.tasks, state.showMode, state.sortMode),
    isFetching: state.isFetching
});

export default connect(mapStateToProps)(TaskList);
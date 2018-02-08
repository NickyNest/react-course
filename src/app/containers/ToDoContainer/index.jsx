import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import FilterBar from 'components/FilterBar';
import {Grid} from 'semantic-ui-react';
import {SHOW_ALL, SORT_CREATED_DATE_NONE} from 'utils/actions';
import * as api from 'utils/apiTool';
import {toDate, buildTask, handleShowMode, handleSortMode} from 'utils/helpers';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showMode: SHOW_ALL,
            sortMode: SORT_CREATED_DATE_NONE
        };
    }

    componentWillMount() {
        this.getAllTasks();
    }

    getAllTasks = () => {
        api.get()
            .then(response => response.json())
            .then(response => {
                const tasks = response.map(x => ({...x, createdDate: toDate(x.createdDate)}));
                this.setState({tasks});
            });
    };

    addTask = title => {
        api.create(buildTask(title))
            .then(response => response.json())
            .then(newTask =>
                this.setState({tasks: [...this.state.tasks, {...newTask, createdDate: toDate(newTask.createdDate)}] }));
    };

    updateTak = (id, isCompleted) => {
        api.update(id, {completed: isCompleted});
        this.getAllTasks();
    };

    removeTask = id => {
        api.remove(id)
            .then(response => {
                // todo deletion
            });
    };

    mapToDoTaskList = tasks => (
        <div>
            {
                tasks.map(task =>
                    <Task key={task.id} task={task} onCheckChange={this.updateTak} onRemoveTask={this.removeTask} />)
            }
        </div>
    );

    changeShowMode = showMode => {
        this.setState({showMode});
    };

    removeCompleted = () => {
        this.state.tasks
            .filter(task => task.completed === true)
            .forEach(task => api.remove(task.id));

        this.getAllTasks();
    };

    changeSortMode = sortMode => {
        this.setState({sortMode});
    };

    render() {
        const {showMode} = this.state;

        const filteredTasks = handleShowMode(this.state.tasks, showMode);
        const filteredAndSortedTasks = handleSortMode(filteredTasks, this.state.sortMode);

        const title = 'Simple To-Do application';
        return (
            <div>
                <h3 className='Todo-title'>{title}</h3>
                <FilterBar
                    changeShowMode={this.changeShowMode}
                    removeCompleted={this.removeCompleted}
                    changeSortMode={this.changeSortMode}
                    currentMode={showMode} />
                <span>total: {filteredTasks.length}</span>
                <TaskInput onAddTask={this.addTask} />
                <Grid>
                    <Grid.Column width={5}>
                        {filteredAndSortedTasks.length === 0 ? 'huhЪ' : this.mapToDoTaskList(filteredAndSortedTasks)}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ToDoContainer;
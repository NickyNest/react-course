import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import FilterBar from 'components/FilterBar';
import {Grid} from 'semantic-ui-react';
import {toDate, buildTask, handleShowMode, handleSortMode} from './helpers';
import {get, create, update, remove} from './ApiTool';
import {showModes, sortModes} from './enums';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showMode: showModes.showAll,
            sortMode: sortModes.None
        };
    }

    componentWillMount() {
        this.getAllTasks();
    }

    getAllTasks = () => {
        get()
            .then(response => response.map(x => ({...x, createdDate: toDate(x.createdDate)})))
            .then(tasks => this.setState({tasks}));
    };

    addTask = title => {
        create(buildTask(title));
        this.getAllTasks();
    };

    updateTak = (id, isCompleted) => {
        update(id, {completed: isCompleted});
        this.getAllTasks();
    };

    removeTask = id => {
        remove(id);
        this.getAllTasks();
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
            .forEach(task => this.removeTask(task.id));

        this.getAllTasks();
    };

    changeSortMode = sortMode => {
        this.setState({sortMode});
    };

    render() {
        const {showMode} = this.state;

        let tasks = handleShowMode(this.state.tasks, showMode);
        tasks = handleSortMode(tasks, this.state.sortMode);

        const title = 'Simple To-Do application';
        return (
            <div>
                <h3 className='Todo-title'>{title}</h3>
                <FilterBar
                    changeShowMode={this.changeShowMode}
                    removeCompleted={this.removeCompleted}
                    changeSortMode={this.changeSortMode}
                    currentMode={showMode} />
                <span>total: {tasks.length}</span>
                <TaskInput onAddTask={this.addTask} />
                <Grid>
                    <Grid.Column width={5}>
                        {tasks.length === 0 ? 'huhЪ' : this.mapToDoTaskList(tasks)}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ToDoContainer;
import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import {Grid} from 'semantic-ui-react';
import {toDate, buildTask} from './helpers';
import {get, create, update, remove} from './ApiTool';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
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

    render() {
        const {tasks} = this.state;
        const title = 'Simple To-Do application';
        return (
            <div>
                <h3 className='Todo-title'>{title}</h3>
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
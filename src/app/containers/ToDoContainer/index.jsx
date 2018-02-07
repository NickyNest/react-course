import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import {Grid} from 'semantic-ui-react';
import faker from 'faker';
import './index.css';
import {get, create, update, remove} from './ApiTool';

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
            .then(tasks => this.setState({tasks}));
    };

    buildTask = title => {
        const createdDate = new Date();

        return {
            id: faker.random.uuid(),
            title,
            completed: false,
            createdDate: `${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`
        };
    };

    addTask = title => {
        create(this.buildTask(title));
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
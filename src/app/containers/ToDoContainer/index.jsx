import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import {Grid} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';
import faker from 'faker';
import './index.css';
import {get, remove} from './ApiTool';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentWillMount() {
        // console.log(getAll());
        // this.getTasks();
        // this.setState({tasks: getAll()});

        get()
            .then(tasks => this.setState({tasks}));
    }

    onAddTask = title => {
        const createdDate = new Date();
        const newTask = {
            id: faker.random.uuid(),
            title,
            completed: false,
            createdDate: `${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`
        };
        this.setState({tasks: [...this.state.tasks, newTask] });
    };

    // onCheckChange = id => {
    //     const newItems = [...this.state.items];
    //     const index = newItems.findIndex(item => item.id === id);
    //     newItems[index].isChecked = !newItems[index].isChecked;

    //     this.setState({items: newItems});
    // };

    onCheckChange = id => {
        const {tasks} = this.state;
        const taskIndex = tasks.findIndex(task => task.id === id);
        const newTask = [
            ...tasks.slice(0, taskIndex),
            {...tasks[taskIndex], completed: !tasks[taskIndex].completed},
            ...tasks.slice(taskIndex + 1, taskIndex.length)
        ];
        this.setState({tasks: newTask});
    };

    onRemoveTask = id => {
        this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
    };

    getTasks = () => {
        fetch('http://localhost:60253/api/tasks')
            .then(response => response.json())
            .then(data => this.setState({tasks: data}));
    };

    AddTask = title => {
        const createdDate = new Date();
        const newTask = {
            id: faker.random.uuid(),
            title,
            completed: false,
            createdDate: `${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`
        };

        fetch('http://localhost:60253/api/tasks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });

        // .then(response => response.json())
        // .then(data => console.log(data));

        this.getTasks();
    };

    UpdateTak = id => {
        const {tasks} = this.state;
        const taskIndex = tasks.findIndex(task => task.id === id);

        fetch(`http://localhost:60253/api/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...tasks[taskIndex], completed: !tasks[taskIndex].completed})
        })
            .then(response => response.json())
            .then(data => console.log(data));

        this.getTasks();
    };

    RemoveTask = id => {
        // fetch(`http://localhost:60253/api/tasks/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // });

        // this.getTasks();
        remove(id);
        get()
            .then(tasks => this.setState({tasks}));
    };

    mapToDoTaskList = tasks => (
        <div>
            {
                tasks.map(task =>
                    <Task key={task.id} task={task} onCheckChange={this.UpdateTak} onRemoveTask={this.RemoveTask} />)
            }
        </div>
    );

    render() {
        const {tasks} = this.state;
        const title = 'Simple To-Do application';
        return (
            <div>
                <h3 className='Todo-title'>{title}</h3>
                <TaskInput onAddTask={this.AddTask} />
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
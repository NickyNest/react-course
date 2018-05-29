import React, {Component} from 'react';
import TaskInput from 'components/TaskInput';
import Task from 'components/Task';
import FilterBar from 'components/FilterBar';
import Tag from 'components/Tag';
import {Grid} from 'semantic-ui-react';
import {SHOW_ALL, SORT_CREATED_DATE_NONE} from 'utils/actions';
import * as taskApi from 'utils/taskStore';
import * as taskTagApi from 'utils/taskTagStore';
import * as tagApi from 'utils/tagStore';
import {toDate, buildTask, handleShowMode, handleSortMode} from 'utils/helpers';
import './index.css';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            tasks1: [],
            tasksTags: [],
            tags: [],
            showMode: SHOW_ALL,
            sortMode: SORT_CREATED_DATE_NONE
        };
    }

    componentWillMount() {
        this.getAllTasks();

        this.getTasks();
        this.getTasksTags();
        this.getTags();
    }

    getTasks = () => {
        taskApi.get()
            .then(response => response.json())
            .then(response => {
                const tasks1 = response.map(task => ({...task, createdDate: toDate(task.createdDate)}));
                this.setState({tasks1});
            });
    }

    getTasksTags = () => {
        taskTagApi.get()
            .then(response => response.json())
            .then(response => { this.setState({tasksTags: response}); });
    }

    getTags = () => {
        tagApi.get()
            .then(response => response.json())
            .then(data => { this.setState({tags: data}); });
    }

    getAllTasks = () => {
        taskApi.get()
            .then(response => response.json())
            .then(response => {
                const tasks = response.map(task => ({...task, createdDate: toDate(task.createdDate)}));
                this.setState({tasks});
            });
    };

   getTasksWithTags = () => {
       const {tasks1} = this.state;
       const {tasksTags} = this.state;
       const {tags} = this.state;

       if (tags.length === 0) {
           return [];
       }

       const tasksTagsWithName = tasksTags.map(taskTag => (
           {...taskTag, title: tags.find(tag => tag.id === taskTag.tagId).title}));

       return tasks1.map(task => (
           {...task, tags: tasksTagsWithName.filter(taskTag => taskTag.taskId === task.id)}));
   }

   addTaskTag = (tagId, taskId) => {
       taskTagApi.create({taskId, tagId})
           .then(response => response.json())
           .then(newTaskTag => this.setState({tasksTags: [...this.state.tasksTags, newTaskTag] }));
   };

    addTask = title => {
        taskApi.create(buildTask(title, new Date()))
            .then(response => response.json())
            .then(newTask =>
                this.setState({tasks: [...this.state.tasks, {...newTask, createdDate: toDate(newTask.createdDate)}] }));
    };

    updateTak = (id, isCompleted) => {
        taskApi.update(id, {completed: isCompleted})
            .then(response => {
                if (response.ok) {
                    const {tasks} = this.state;
                    const taskIndex = tasks.findIndex(task => task.id === id);
                    const newTasks = [
                        ...tasks.slice(0, taskIndex),
                        {...tasks[taskIndex], completed: isCompleted},
                        ...tasks.slice(taskIndex + 1, taskIndex.length)
                    ];
                    this.setState({tasks: newTasks});
                } else {
                    throw new Error('Network response was not ok.');
                }
            });
    };

    removeTask = id => {
        taskApi.remove(id)
            .then(response => {
                if (response.ok) {
                    this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
                } else {
                    throw new Error('Network response was not ok.');
                }
            });
    };

    removeTaskTag = id => {
        taskTagApi.remove(id)
            .then(response => {
                if (response.ok) {
                    this.setState({tasksTags: this.state.tasksTags.filter(taskTag => taskTag.id !== id)});
                } else {
                    throw new Error('Network response was not ok.');
                }
            });
    };

    mapToDoTaskList = tasks => (
        <div>
            {
                tasks.map(task =>
                    (<Task
                        key={task.id}
                        task={task}
                        onCheckChange={this.updateTak}
                        onRemoveTask={this.removeTask}
                        onAddTaskTag={this.addTaskTag}
                        onRemoveTaskTag={this.removeTaskTag} />))
            }
        </div>
    );

    mapTags = tags => (
        <div>
            {
                tags.map(tag => <Tag key={tag.id} tag={tag} />)
            }
        </div>
    );

    changeShowMode = showMode => {
        this.setState({showMode});
    };

    removeCompleted = () => {
        this.state.tasks
            .filter(task => task.completed === true)
            .forEach(task => taskApi.remove(task.id));

        this.getAllTasks();
    };

    changeSortMode = sortMode => {
        this.setState({sortMode});
    };

    render() {
        const newTasks = this.getTasksWithTags();

        const {showMode} = this.state;

        const filteredTasks = handleShowMode(newTasks, showMode);
        const filteredAndSortedTasks = handleSortMode(filteredTasks, this.state.sortMode);

        const {tags} = this.state;

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
                <Grid divided>
                    <Grid.Column width={10}>
                        {filteredAndSortedTasks.length === 0 ? 'huhЪ' : this.mapToDoTaskList(filteredAndSortedTasks)}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {tags.length === 0 ? 'huhЪ' : this.mapTags(tags)}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ToDoContainer;
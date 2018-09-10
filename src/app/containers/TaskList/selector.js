import {sortWith, prop, descend, ascend} from 'ramda';
import {SHOW_MODES, SORT_MODES} from '../../actions';

const filterTasks = (tasks, showMode) => {
    switch (showMode) {
        case SHOW_MODES.SHOW_COMPLETED:
            return tasks.filter(task => task.completed === true);
        case SHOW_MODES.SHOW_PENDING:
            return tasks.filter(task => task.completed === false);
        default:
            return tasks;
    }
};

const sortTasks = (tasks, sortMode) => {
    switch (sortMode) {
        case SORT_MODES.SORT_CREATED_DATE_UP:
            return sortWith([ascend(prop('createdDate')), ascend(prop('title'))], tasks);
        case SORT_MODES.SORT_CREATED_DATE_DOWN:
            return sortWith([descend(prop('createdDate')), ascend(prop('title'))], tasks);
        default:
            return tasks;
    }
};

const getFilteredTasks = (tasks, showMode, sortMode) => {
    const filteredTask = filterTasks(tasks, showMode);
    return sortTasks(filteredTask, sortMode);
};

export default getFilteredTasks;
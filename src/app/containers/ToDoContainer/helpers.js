import faker from 'faker';
import {showModes, sortModes} from './enums';

const toDate = weirdDate => {
    const parts = weirdDate.split('/');
    return new Date(parts[2], parts[0], parts[1]).toLocaleDateString();
};

const toWeirdDate = () => {
    const now = new Date();
    return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
};

const buildTask = title => ({
    id: faker.random.uuid(),
    title,
    completed: false,
    createdDate: toWeirdDate()
});

const handleShowMode = (tasks, showMode) => {
    switch (showMode) {
        case showModes.showCompleted:
            return tasks.filter(task => task.completed === true);
        case showModes.showPending:
            return tasks.filter(task => task.completed === false);
        default:
            return tasks;
    }
};

const sortFunction = (task1, task2) => new Date(task1.createdDate) - new Date(task2.createdDate);

const handleSortMode = (tasks, sortMode) => {
    switch (sortMode) {
        case sortModes.Up:
            return tasks.sort(sortFunction);
        case sortModes.Down:
            return tasks.reverse(sortFunction);
        default:
            return tasks;
    }
};

export {toDate, buildTask, handleShowMode, handleSortMode};
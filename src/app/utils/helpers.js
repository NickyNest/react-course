import * as actions from 'utils/actions';

export const toDate = weirdDate => {
    const parts = weirdDate.split('/');
    return new Date(parts[2], parts[0], parts[1]);
};

const toWeirdDate = () => {
    const now = new Date();
    return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
};

export const buildTask = title => ({
    title,
    completed: false,
    createdDate: toWeirdDate()
});

export const handleShowMode = (tasks, showMode) => {
    switch (showMode) {
        case actions.SHOW_COMPLETED:
            return tasks.filter(task => task.completed === true);
        case actions.SHOW_PENDING:
            return tasks.filter(task => task.completed === false);
        default:
            return tasks;
    }
};

const sortFunction = (task1, task2) => {
    if (task1.createdDate.getTime() === task2.createdDate.getTime()) {
        if (task1.title < task2.title) {
            return - 1;
        }
        return task1.title > task2.title ? 1 : 0;
    }

    return task1.createdDate.getTime() < task2.createdDate.getTime() ? - 1 : 1;
};

export const handleSortMode = (tasks, sortMode) => {
    switch (sortMode) {
        case actions.SORT_CREATED_DATE_UP:
            return tasks.sort(sortFunction);
        case actions.SORT_CREATED_DATE_DOWN:
            return tasks.sort(sortFunction).reverse();
        default:
            return tasks;
    }
};
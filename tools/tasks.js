/* eslint-disable import/no-extraneous-dependencies */

import faker from 'faker';

const generateTasks = () => {
    const tasks = [];
    for (let i = 0; i < 50; i++) {
        const id = faker.random.uuid();
        const title = faker.random.word();
        const completed = faker.random.boolean();
        const createdDate = faker.date.between(new Date(2017, 11, 17), new Date(2018, 1, 1));
        tasks.push({
            id,
            title,
            completed,
            createdDate: `${createdDate.getDay()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`
        });
    }
    return {tasks};
};

module.exports = generateTasks;
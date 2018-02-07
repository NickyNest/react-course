import faker from 'faker';

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

export {toDate, buildTask};
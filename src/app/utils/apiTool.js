import fetch from 'isomorphic-fetch';

const endpoint = 'http://localhost:60253/api/tasks';

const fetchRequest = options => {
    const {method} = options;
    const {id} = options;
    const {body} = options;

    const url = id ? `${endpoint}/${id}` : endpoint;
    const init = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        init.body = JSON.stringify(body);
    }

    return fetch(url, init);
};

export const get = () => fetchRequest({method: 'GET'});
export const create = body => fetchRequest({method: 'POST', body});
export const update = (id, body) => fetchRequest({method: 'PATCH', id, body});
export const remove = id => fetchRequest({method: 'DELETE', id});

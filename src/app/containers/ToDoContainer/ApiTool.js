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

    return fetch(url, init)
        .then(response => response.json())
        .then(responseData => responseData)
        .catch(error => { throw new Error(error); });
};

const get = () => fetchRequest({method: 'GET'});
const create = body => fetchRequest({method: 'POST', body});
const update = (id, body) => fetchRequest({method: 'PATCH', id, body});
const remove = id => fetchRequest({method: 'DELETE', id});

export {get, create, update, remove};
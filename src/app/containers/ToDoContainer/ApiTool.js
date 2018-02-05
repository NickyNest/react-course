import fetch from 'isomorphic-fetch';

const endpoint = 'http://localhost:60253/api/tasks';

const fetchRequest = (method, resourceId, body) => {
    // debugger; // eslint-disable-line
    const url = resourceId ? `${endpoint}/${resourceId}` : endpoint;
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

const get = () => fetchRequest('GET');

const remove = id => fetchRequest('DELETE', id);

export {get, remove};
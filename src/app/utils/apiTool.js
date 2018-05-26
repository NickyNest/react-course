import fetch from 'isomorphic-fetch';

const fetchRequest = options => {
    const {endpoint} = options;
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

export const get = endpoint => fetchRequest({endpoint, method: 'GET'});
export const create = (endpoint, body) => fetchRequest({endpoint, method: 'POST', body});
export const update = (endpoint, id, body) => fetchRequest({endpoint, method: 'PATCH', id, body});
export const remove = (endpoint, id) => fetchRequest({endpoint, method: 'DELETE', id});

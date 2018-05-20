import * as api from 'utils/apiTool';
import fetch from 'isomorphic-fetch';

jest.mock('isomorphic-fetch');

const expectedUrl = 'http://localhost:60253/api/tasks';
const expectedHeaders = {Accept: 'application/json', 'Content-Type': 'application/json'};
const body = {name: 'value'};
const id = 111;

test('get should call fetch with method: GET', () => {
    api.get();
    const expectedInit = {headers: expectedHeaders, method: 'GET'};
    expect(fetch).toHaveBeenCalledWith(expectedUrl, expectedInit);
});

test('create should call fetch with method: POST and expected body', () => {
    api.create(body);
    const expectedInit = {body: '{"name":"value"}', headers: expectedHeaders, method: 'POST'};
    expect(fetch).toHaveBeenCalledWith(expectedUrl, expectedInit);
});

test('update should call fetch with method: PATCH and expected body', () => {
    api.update(id, body);
    const expectedInit = {body: '{"name":"value"}', headers: expectedHeaders, method: 'PATCH'};
    expect(fetch).toHaveBeenCalledWith(`${expectedUrl}/${id}`, expectedInit);
});

test('remove should call fetch with method: DELETE', () => {
    api.remove(id);
    const expectedInit = {headers: expectedHeaders, method: 'DELETE'};
    expect(fetch).toHaveBeenCalledWith(`${expectedUrl}/${id}`, expectedInit);
});
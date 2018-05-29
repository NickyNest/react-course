import * as api from 'utils/apiTool';

const endpoint = 'http://localhost:60253/api/tasks_tags';

export const get = () => api.get(endpoint);
export const create = body => api.create(endpoint, body);
export const remove = id => api.remove(endpoint, id);
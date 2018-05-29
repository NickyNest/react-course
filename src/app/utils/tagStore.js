import * as api from 'utils/apiTool';

const endpoint = 'http://localhost:60253/api/tags';

export const get = () => api.get(endpoint);
export const create = body => api.create(endpoint, body);
export const update = (id, body) => api.update(endpoint, id, body);
export const remove = id => api.remove(endpoint, id);
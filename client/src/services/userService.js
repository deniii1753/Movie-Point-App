import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/users';
const DEFAULT_FROM = 0;
const DEFAULT_TO = 8;

export const getUsers = (from = DEFAULT_FROM, to = DEFAULT_TO, authToken) => requester(`${BASE_URL}?skip=${from}&limit=${to}`, 'GET', null, authToken);
export const getUsersBySearch = (key, value, from = DEFAULT_FROM, to = DEFAULT_TO, authToken) => requester(`${BASE_URL}?${key}=${value}&skip=${from}&limit=${to}`, 'GET', null, authToken);
export const getUsersCount = (authToken) => requester(`${BASE_URL}/count`, 'GET', null, authToken);
export const getUser = (userId, authToken) => requester(`${BASE_URL}/${userId}`, 'GET', null, authToken);
export const editUser = (userId, newData, authToken) => requester(`${BASE_URL}/${userId}`, 'PUT', newData, authToken);
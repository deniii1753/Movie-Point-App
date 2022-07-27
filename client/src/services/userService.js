import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/users';

export const getUser = (authToken) => requester(`${BASE_URL}`, 'GET', null, authToken);
export const editUser = (newData, authToken) => requester(`${BASE_URL}`, 'PUT', newData, authToken);
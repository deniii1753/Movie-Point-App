import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/genres';

export const getAll = (from = 0, to = 0) => requester(`${BASE_URL}?skip=${from}&limit=${to}`, 'GET');
export const getGenresBySearch = (key, value, from, to) => requester(`${BASE_URL}?${key}=${value}&skip=${from}&limit=${to}`, 'GET', null);
export const getOne = (genreId) => requester(`${BASE_URL}/${genreId}`, 'GET', null);
export const getCount = () => requester(`${BASE_URL}/count`, 'GET', null);
export const editOne = (genreId, newData, authToken) => requester(`${BASE_URL}/${genreId}`, 'PUT', newData, authToken);
export const addNew = (genre, authToken) => requester(`${BASE_URL}`, 'POST', genre, authToken);

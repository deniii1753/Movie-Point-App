import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/movies';

export const getRecent = (from = 0, to = 0) => requester(`${BASE_URL}?skip=${from}&sort=_creationDate&order=desc&limit=${to}`, 'GET');
export const getTopFive = () => requester(`${BASE_URL}?sort=likes&order=desc&limit=5`, 'GET');
export const getTopRated = () => requester(`${BASE_URL}?sort=likes&order=desc&limit=1`, 'GET');
export const getMovies = (from = 0, to = 8) => requester(`${BASE_URL}?skip=${from}&limit=${to}`, 'GET');
export const getMoviesCount = () => requester(`${BASE_URL}/count`, 'GET');
export const getOne = (movieId) => requester(`${BASE_URL}/${movieId}`, 'GET');
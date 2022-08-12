import requester from "./requester";

const DEFAULT_FROM = 0;
const DEFAULT_TO = 8;
const BASE_URL = 'https://movie-point-backend.herokuapp.com/api/movies';

export const getRecent = (from = DEFAULT_FROM, to = DEFAULT_TO) => requester(`${BASE_URL}?skip=${from}&sort=_creationDate&order=desc&limit=${to}`, 'GET');
export const getTopFive = () => requester(`${BASE_URL}?sort=likes&order=desc&limit=5`, 'GET');
export const getTopRated = () => requester(`${BASE_URL}?sort=likes&order=desc&limit=1`, 'GET');
export const getMovies = (from = DEFAULT_FROM, to = DEFAULT_TO) => requester(`${BASE_URL}?skip=${from}&limit=${to}`, 'GET');
export const getMoviesBySearch = (key, value, from = DEFAULT_FROM, to = DEFAULT_TO) => requester(`${BASE_URL}?${key}=${value}&skip=${from}&limit=${to}`);
export const getMoviesCount = () => requester(`${BASE_URL}/count`, 'GET');
export const getOne = (movieId) => requester(`${BASE_URL}/${movieId}?genres=true`, 'GET');
export const addMovie = (movie, authToken) => requester(`${BASE_URL}`, 'POST', movie, authToken);
export const editMovie = (movieId, updatedMovie, authToken) => requester(`${BASE_URL}/${movieId}`, 'PUT', updatedMovie, authToken);
export const deleteMovie = (movieId, authToken) => requester(`${BASE_URL}/${movieId}`, 'DELETE', null, authToken);
export const like = (movieId, authToken) => requester(`${BASE_URL}/${movieId}/like`, 'POST', null, authToken);
export const removeLike = (movieId, authToken) => requester(`${BASE_URL}/${movieId}/like`, 'DELETE', null, authToken);
export const dislike = (movieId, authToken) => requester(`${BASE_URL}/${movieId}/dislike`, 'POST', null, authToken);
export const removeDislike = (movieId, authToken) => requester(`${BASE_URL}/${movieId}/dislike`, 'DELETE', null, authToken);


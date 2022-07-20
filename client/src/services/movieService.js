const BASE_URL = 'http://localhost:3030/api/movies';

export function getRecent(from = 0, to = 8) {
    return fetch(`${BASE_URL}?skip=${from}&sort=_creationDate&order=desc&limit=${to}`)
        .then(res => res.json());
}

export function getTopFive() {
    return fetch(`${BASE_URL}?sort=likes&order=desc&limit=5`)
        .then(res => res.json());
}

export function getTopRated() {
    return fetch(`${BASE_URL}?sort=likes&order=desc&limit=1`)
        .then(res => res.json());
}

export function getMovies(from = 0, to = 8) {
    return fetch(`${BASE_URL}?skip=${from}&limit=${to}`)
        .then(res => res.json());
}

export function getMoviesCount() {
    return fetch(`${BASE_URL}/count`)
        .then(res => res.json());
}
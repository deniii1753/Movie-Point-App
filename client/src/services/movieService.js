const BASE_URL = 'http://localhost:3030/api/movies';

export function getRecent() {
    return fetch(`${BASE_URL}?sort=creationDate&order=asc&limit=8`)
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
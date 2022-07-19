const BASE_URL = 'http://localhost:3030/api/genre';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}
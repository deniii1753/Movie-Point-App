import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/genre';

export const getAll = () => requester(BASE_URL, 'GET');
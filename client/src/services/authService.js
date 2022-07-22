import requester from "./requester";

const BASE_URL = 'http://localhost:3030/api/auth';

export const register = (data) => requester(`${BASE_URL}/register`, 'POST', data);
export const login = (data) => requester(`${BASE_URL}/login`, 'POST', data);
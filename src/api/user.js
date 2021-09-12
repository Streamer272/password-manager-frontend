import { makeRequest } from './makeRequest';

const login = async (username, password) => {
    return await makeRequest('http://localhost:8080/api/user/login', {
        username,
        password
    }, 'POST');
}

const logout = async (token) => {
    return await makeRequest('http://localhost:8080/api/user/login', {
        token
    }, 'POST');
}

export { login, logout };

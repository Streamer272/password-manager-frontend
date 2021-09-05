import { makeRequest } from './makeRequest';

const login = async (username, password) => {
    return await makeRequest('http://localhost:8080/api/user/login', {
        username,
        password
    }, 'POST');
}

const logout = async (tokenId) => {
    return await makeRequest('http://localhost:8080/api/user/login', {
        tokenId
    }, 'POST');
}

export { login, logout };

import { makeRequest } from './makeRequest';

const queryPasswordsByName = async (query, token) => {
    return await makeRequest(`http://127.0.0.1:8080/api/password/${query ? query : ''}`, {}, 'GET', token);
}

const createPassword = async (name, value, token) => {
    return await makeRequest(`http://127.0.0.1:8080/api/password`, { name, value }, 'PUT', token);
}

export {
    queryPasswordsByName,
    createPassword
};

export const makeRequest = async (url, data = {}, method = 'GET', token = 0) => {
    return await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: method === 'GET' ? null : JSON.stringify(data)
    });
}

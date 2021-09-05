export const makeRequest = async (url, data, method) => {
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

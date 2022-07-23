async function requester(url, method, data, token) {
    const headers = {
        'content-type': 'application/json',
    };

    if (token) headers['x-auth-token'] = token;

    const options = {
        method,
        headers,
    }

    if (data) options.body = JSON.stringify(data);

    const res = await fetch(url, options);

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }

    if(res.status === 204) return res;
    return res.json();
}

export default requester;
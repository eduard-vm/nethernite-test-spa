function assertPath(path) {
  const type = typeof path;
  if (type !== 'string') {
    throw new TypeError(`The path should be a string, instead received a ${type}`);
  }
}

async function parseResponse(res) {
  const data = await res.json();
  return data;
}

export default function request(path, options = {}) {
  const {
    headers,
    query = null,
    method = 'GET',
    body,
    host = '',
  } = options;

  assertPath(path);

  const reqOptions = {
    method,
    headers: {
      ...headers,
    },
  };

  if (body) {
    reqOptions.body = typeof body === 'object' ? JSON.stringify(body) : body;
  }

  let queryString = '';

  if (query) {
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${host}${path}${queryString}`, reqOptions).then(parseResponse);
}

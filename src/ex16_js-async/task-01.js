function customFetch(url, options) {
  const xhr = new XMLHttpRequest();
  return new Promise((response, reject) => {
    xhr.onload = () => {
      response(JSON.parse(xhr.response));
    };

    xhr.onerror = () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ status: xhr.status, statusText: xhr.statusText });
    };

    xhr.open(options.method, url);

    if (Object.keys(options.header).length > 0) {
      Object.entries(options.header).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });
    }

    if (options.method === 'POST') {
      xhr.send(JSON.stringify(options.body));
    } else {
      xhr.send();
    }
  });
}

const options = {
  method: 'GET',
  body: {},
  header: {},
};

customFetch('https://api.github.com/search/users', options)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

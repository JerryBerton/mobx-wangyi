
export default (endpoint, parameter = { method: 'GET'}) => {
  const url  = `http://47.94.193.211:3000/${endpoint}`;
  return fetch(url, {
    ...parameter
  })
  .then(res => res.json().then(json => json))
  .then(resp => {
    return new Promise((resolve, reject) => {
      if (resp.code === 200) {
        resolve(resp.data || resp.result);
      } else {
        reject('data is error');
      }
    })
  });
};

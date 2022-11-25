import { useCookie } from 'react-use';

const apiUrl = process.env.ApiUrl || '';
const stringify = (obj) => {
  return { body: JSON.stringify(obj) };
}

const fetchApi = async(url, opts) => {
  const [err, res] = await to(fetch(url, opts));
  if (res) {
    return await res.json();
  }
  if (err) {
    return err;
  }
};

export const Api = {
  // const [value, updateCookie, deleteCookie] = useCookie('my');
  // console.log('value: ', value)
  
  user: {
    signin: async() => {
      return await fetchApi(`${apiUrl}/v1/user/signin`, {
        method: 'POST',
        ...stringify({
          email: 'Alan@gmail.com',
          password: '123456789',
        }),
      });
    },
  },
};
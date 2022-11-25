import { useCookie } from 'react-use';

const apiUrl = process.env.ApiUrl || '';
const stringify = (obj) => {
  return { body: JSON.stringify(obj) };
}

const fetchApi = async(url, opts) => {
  const [err, success] = await to(fetch(url, opts));
  if (err) {
    return { err };
  }
  if (success) {
    const [fail, res] = await to(success.json());
    if (res) {
      if (!res.success) {
        return { err: res };
      }
      return { res };
    } else {
      return { err: fail };
    }
  }
};

export const Api = {
  // const [value, updateCookie, deleteCookie] = useCookie('my');
  // console.log('value: ', value)
  
  user: {
    signin: async() => {
      return await fetchApi(`${apiUrl}/v1/user/signin2`, {
        method: 'POST',
        ...stringify({
          email: 'Alan@gmail.com',
          password: '123456789k',
        }),
      });
    },
  },
};
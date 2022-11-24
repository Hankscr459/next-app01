import { useCookie } from 'react-use';

const apiUrl = process.env.ApiUrl || '';
const stringify = (obj) => {
  return { body: JSON.stringify(obj) };
}

export const Api = {
  // const [value, updateCookie, deleteCookie] = useCookie('my');
  // console.log('value: ', value)
  
  user: {
    signin: async() => {
      return await (await fetch(`${apiUrl}/v1/user/signin2`, {
        method: 'POST',
        ...stringify({
          email: 'Alan@gmail.com',
          password: '123456789',
        }),
      })).json();
    },
  },
};
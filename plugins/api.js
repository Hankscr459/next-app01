// import { useCookie } from 'react-use';

const apiUrl = process.env.ApiUrl || '';

export const Api = {
  // const [value, updateCookie, deleteCookie] = useCookie('my');
  // console.log('value: ', value)
  
  user: {
    signin: async() => {
      return fetch(`${apiUrl}/v1/user/signin`, {
        method: 'POST',
        body: JSON.stringify({
          email: 'Alan@gmail.com',
          password: '123456789',
        }),
      });
    },
  },
};
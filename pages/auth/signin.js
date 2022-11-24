import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Api } from '@/plugins/api';
import { Card } from '@mui/material';
import { useSetState } from 'react-use';
import { useMyForm } from '../../helpers/util';

export default function Signin() {
  const { values, bind, setValues } = useMyForm({
    name: '',
    type: '',
    price: {
      dollar: 5, 
      cents: 20, 
      config: {
        name: '123', 
        key: 'my',
      },
    },
    list: [{key: 1, value: 'hello'}],
  });
  const [state, setState] = useSetState({
    name: '123',
  });
  const [token, setToken] = useState({});
  const [errMessage, setErrMessage] = useState({});

  const signin = async() => {
    const res = await Api.user.signin();
    if (res.success) {
      setToken(res);
    }
    if (!res.success) {
      setErrMessage(res.message);
    }
  }

  const vModel = (prop) => {
    return { 
      value: state[prop], 
      onChange: e => setState({ [prop]: e.target.value })
    };
  }

  return pug`
    div(className="flex justify-center")
      .flex-col
        Button(size="small", onClick=${signin}) Learn More
        h3 Err: ${JSON.stringify(errMessage)}
        h3 success: ${JSON.stringify(token)}
        input(type="text",  ...vModel('name'))
        br
        input(type="text", name="price.config.name",  ...bind)
    // div(className="flex justify-center")
    //   .flex-col
    //     Button(size="small", onClick=${signin}) Learn More
    //     br
    //     Card(className="w-[30rem] flex justify-center")
    //       div(className="flex-col")
    //         h2 title
    //         span(
    //           className="flex max-w-[20rem] overflow-y-auto",
    //         ) value: ${JSON.stringify(token)}
  `
}
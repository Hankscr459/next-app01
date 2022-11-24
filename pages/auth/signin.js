import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Api } from '@/plugins/api';
import { Card } from '@mui/material';
import { useSetState } from 'react-use';
import { useHookstate, State } from '@hookstate/core';

export default function Signin() {
  const objState = useHookstate({
    member: {
      no: 'asdf',
      type: 'vip',
    },
    desc: 'desc',
  })
  console.log('objState: ', objState);
  const [obj, setObj] = useSetState({
    key: 'vrstion',
    value: 'fref',
  });
  const [state, setState] = useSetState({
    name: '123',
    obj,
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

  const vModel2 = (prop) => {
    const propsArr = prop.split('.');
    let value = objState[prop].get();
    let onChange =  e => objState[prop].set(e.target.value);
    if (propsArr.length === 2) {
      value = objState[propsArr[0]][propsArr[1]].get();
      onChange =  e => objState[propsArr[0]][propsArr[1]].set(e.target.value);
    }
    return { value, onChange };
  }

  return pug`
    div(className="flex justify-center")
      .flex-col
        Button(size="small", onClick=${signin}) Learn More
        h3 Err: ${JSON.stringify(errMessage)}
        h3 success: ${JSON.stringify(token)}
        input(type="text",  ...vModel('name'))
        input(type="text",  value=${obj.key}, onChange=${(e) => {
          setObj({ key: e.target.value })
        }})
        input(type="text",  ...vModel2('member.no'))
        input(type="text",  ...vModel2('desc'))
        h3  ${JSON.stringify(state)}
        h3  ${JSON.stringify(obj)}
        h3  ${JSON.stringify(objState.get())}
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
import React from 'react';
import { useHookstate } from '@hookstate/core';
import { bind } from '../../helpers/util';
await import ('../../helpers/autoImport');

export default function Test () {
  const objState = useHookstate({
    member: {
      no: 'asdf',
      type: 'vip',
    },
    desc: 'desc',
  });

  return pug`
    div
      div
        input(...bind(objState.member.no))
      div
        span ${JSON.stringify(objState.get())}
  `;
};

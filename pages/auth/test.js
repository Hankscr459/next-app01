import { get } from 'lodash';

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
      div
        .flex ${JSON.stringify(getNest(objState))}
  `;
};

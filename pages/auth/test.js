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

export default function Signin() {
  const [token, setToken] = useState({});
  const [errMessage, setErrMessage] = useState({});

  const signin = async() => {
    const { err, res } = await Api.user.signin();
    if (res) {
      setToken(res);
    }
    if (err) {
      setErrMessage(err.message);
    }
  }

  return pug`
    div(className="flex justify-center")
      .flex-col
        Button(size="small", onClick=${signin}) Learn More
        h3 Err: ${JSON.stringify(errMessage)}
        h3 success: ${JSON.stringify(token)}
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
import { useRef } from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { validForm } from '../../helpers/util';

export default function Signin() {
  const form = useRef();
  const body = useHookstate({
    email: '',
    password: '',
  });
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

  const handleSubmit = () => {
  }

  return pug`
    Grid(
      className="my-[15vh]",
      sx=${{ flexGrow: 1 }}, container, spacing=${2},
    )
      Grid(item xs=${12})
        Grid(container, justifyContent="center", spacing=${2})
          ValidatorForm(
            className=
              'p-8 w-[100%] ' +
              'md:max-w-[30rem] ' +
              'sm:max-w-[20rem] ',
            ref=${form},
            onSubmit=${handleSubmit},
            onError=${errors => validForm(errors)},
          )
            Grid(container, spacing=${2})
              Grid(item, xs=${12})
                TextValidator(
                  className="w-[100%]",
                  ...bind(body.password)
                  label="Email",
                  name="email",
                  validators=${['required', 'isEmail']}
                  errorMessages=${['Email欄位必填', 'Email格式不對']}
                )
                TextValidator(
                  className="my-4 w-[100%]",
                  ...bind(body.email),
                  label="Password", name="password",
                  validators=${['required']}, type="password",
                  errorMessages=${['密碼欄位必填']}
                )
            Button(type="submit") Submit
  `
}
import { useRef } from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { validForm, errAbortModal } from '../../helpers/util';
import { useCookie } from 'react-use';
import Swal from 'sweetalert2';
import { get } from 'lodash';

export default function Signin() {
  const form = useRef();
  const body = useHookstate({
    email: '',
    password: '',
  });
  const [value, updateCookie, deleteCookie] = useCookie('token');
  const signin = async() => {
    const { err, res } = await Api.user.signin(body.get());
    errAbortModal(err);
    updateCookie(get(res, 'data.token'));
  }

  return pug`
    Grid(
      className="my-[15vh]",
      sx=${{ flexGrow: 1 }}, container, spacing=${2},
    )
      Grid(item, xs=${12})
        Grid(container, justifyContent="center", spacing=${2})
          ValidatorForm(
            className=
              'p-8 w-[100%] ' +
              'md:max-w-[30rem] ' +
              'sm:max-w-[20rem] ',
            ref=${form},
            onSubmit=${(e) => signin(e)},
            onError=${errors => validForm(errors)},
          )
            Grid(container, spacing=${2})
              Grid(item, xs=${12})
                TextValidator(
                  className="w-[100%]",
                  ...bind(body.email),
                  label="Email", name="email",
                  validators=${['required', 'isEmail']},
                  errorMessages=${['Email欄位必填', 'Email格式不對']},
                )
                TextValidator(
                  className="my-4 w-[100%]",
                  ...bind(body.password),
                  label="Password", name="password",
                  validators=${['required']}, type="password",
                  errorMessages=${['密碼欄位必填']},
                )
            Button(type="submit") Submit
  `
}
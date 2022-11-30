import { get, flatten } from 'lodash';
import Swal from 'sweetalert2';

export function bindPrevent (obj) {
  return {
    value: obj.get(), 
    onChange: (e) => obj.set(e.target.value), 
    onKeyPress: (e) => {
      if (e.key === 'Enter') e.preventDefault();
    }
  };
}

export function bind (obj) {
  return { value: obj.get(), onChange: (e) => obj.set(e.target.value)};
}

export function getNest (obj, path, de) {
  if (!path) {
    return obj.get();
  }
  const v = get(obj, `${path}`)
  if (!v || !v.get()) {
    if (de) {
      return de;
    } else {
      return null;
    }
  }
  return v.get();
};

export const useMyForm = initialObject => {
  const [values, setValues] = useState(initialObject);
  // Copied and modified from https://stackoverflow.com/a/18937118/11125492
  const nestedObjectSet = (obj, path, value) => {
    let schema = obj; // a moving reference to internal objects within obj
    const pList = path.split(".");
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!schema[elem]) schema[elem] = {};
      schema = schema[elem];
    }
    schema[pList[len - 1]] = value;
  };
  // handleOnChange update state value
  const handleOnChange = event => {
    const newValues = Object.assign({}, values);
    nestedObjectSet(newValues, event.target.name, event.target.value);
    setValues(newValues);
  };
  return {
    values: values || initialObject,
    setValues,
    reset: () => setValues({}),
    bind: {
      onChange: handleOnChange
    }
  };
};

export const validForm = (errors) => {
  if (errors?.length) {
    const list = errors.map(e => {
      return e.invalid.map(ei => {
        return `\n${e.state.errorMessages[ei]}`;
      });
    });
    const title = flatten(list).toString().substring(1);
    Swal.fire({ title, icon: 'error' });
    throw title;
  }
};

export const errModal = (err) => {
  if (err?.message) {
    Swal.fire({ title: err.message, icon: 'error' });
  }
}

export const errAbortModal = (err) => {
  if (err?.message) {
    Swal.fire({ title: err.message, icon: 'error' });
    throw get(err, 'message', 'No Erorr, but got Abort. Please check your code');
  }
}

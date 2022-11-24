export function bind (obj) {
    return { value: obj.get(), onChange: (e) => obj.set(e.target.value) };
}

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
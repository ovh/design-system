enum INPUT_TYPE {
  email = 'email',
  number = 'number',
  password = 'password',
  search = 'search',
  text = 'text',
  time = 'time',
  url = 'url',
}

type InputType =`${INPUT_TYPE}`;

const INPUT_TYPES = Object.freeze(Object.values(INPUT_TYPE));

export {
  INPUT_TYPE,
  INPUT_TYPES,
  type InputType,
};

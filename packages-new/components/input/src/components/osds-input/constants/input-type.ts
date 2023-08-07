enum ODS_INPUT_TYPE {
  date = 'date',
  email = 'email',
  number = 'number',
  password = 'password',
  search = 'search',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
}

const ODS_INPUT_TYPES = Object.freeze(Object.values(ODS_INPUT_TYPE));

export {
  ODS_INPUT_TYPE,
  ODS_INPUT_TYPES,
};

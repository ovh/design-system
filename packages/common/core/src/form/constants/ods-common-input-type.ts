enum ODS_COMMON_INPUT_TYPE {
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

const ODS_COMMON_INPUT_TYPES = Object.freeze(Object.values(ODS_COMMON_INPUT_TYPE));

export {
  ODS_COMMON_INPUT_TYPE,
  ODS_COMMON_INPUT_TYPES,
};

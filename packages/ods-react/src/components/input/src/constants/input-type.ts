enum ODS_INPUT_TYPE {
  email = 'email',
  number = 'number',
  password = 'password',
  search = 'search',
  text = 'text',
  time = 'time',
  url = 'url',
}

type OdsInputType =`${ODS_INPUT_TYPE}`;

const ODS_INPUT_TYPES = Object.freeze(Object.values(ODS_INPUT_TYPE));

export {
  ODS_INPUT_TYPE,
  ODS_INPUT_TYPES,
  type OdsInputType,
};

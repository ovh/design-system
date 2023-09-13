import { OdsDatepickerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDatepickerAttribute = Object.freeze({
  clearable: false,
  disabled: false,
  error: '',
  format: 'dd/mm/yyyy',
  placeholder: '',
  value: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};

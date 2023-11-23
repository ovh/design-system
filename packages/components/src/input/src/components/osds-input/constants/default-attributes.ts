import type { OdsInputAttribute } from '../interfaces/attributes';
import { ODS_INPUT_TYPE } from './input-type';

const DEFAULT_ATTRIBUTE: OdsInputAttribute = Object.freeze({
  ariaLabel: null,
  defaultValue: '',
  disabled: false,
  error: false,
  inline: false,
  masked: true,
  name: '',
  type: ODS_INPUT_TYPE.text,
  value: null,
});

export {
  DEFAULT_ATTRIBUTE,
};

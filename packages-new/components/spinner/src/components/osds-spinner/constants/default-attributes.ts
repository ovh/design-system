import type { OdsSpinnerAttribute } from '../interfaces/attributes';
import { ODS_SPINNER_MODE } from './spinner-mode';
import { ODS_SPINNER_SIZE } from './spinner-size';

const DEFAULT_ATTRIBUTE: OdsSpinnerAttribute = Object.freeze({
  contrasted: false,
  inline: false,
  mode: ODS_SPINNER_MODE.indeterminate,
  size: ODS_SPINNER_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

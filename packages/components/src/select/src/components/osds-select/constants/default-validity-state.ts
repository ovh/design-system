import type { OdsCommonFieldValidityState } from '@ovhcloud/ods-common-core';

const DEFAULT_VALIDITY_STATE: OdsCommonFieldValidityState = Object.freeze({
  badInput: false,
  customError: false,
  forbiddenValue: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false,
});

export {
  DEFAULT_VALIDITY_STATE,
};

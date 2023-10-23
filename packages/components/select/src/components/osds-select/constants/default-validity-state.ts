import type {OdsValidityState} from '@ovhcloud/ods-common-core';

const DEFAULT_VALIDITY_STATE: OdsValidityState = Object.freeze({
  customError: false,
  forbiddenValue: false,
  invalid: false,
  stepMismatch: false,
  valid: true,
  valueMissing: false,
});

export {
  DEFAULT_VALIDITY_STATE,
};

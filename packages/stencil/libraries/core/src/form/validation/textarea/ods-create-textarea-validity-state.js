/**
 * get a default vanilla `ValidityState` used in ODS
 */
export function OdsCreateTextAreaValidityState() {
  return {
    valid: true,
    valueMissing: false,
    customError: false
  };
}

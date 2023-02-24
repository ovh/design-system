/**
 * get a default vanilla `ValidityState` used in ODS
 */
export function OdsCreateDefaultValidityState() {
  return {
    valid: true,
    stepMismatch: false,
    valueMissing: false,
    customError: false
  };
}

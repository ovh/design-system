/**
 * modified vanilla `ValidityState` used with ODS
 */
export type OdsUsedValidityState = Pick<ValidityState, 'stepMismatch' | 'valueMissing' | 'valid' | 'customError'>;

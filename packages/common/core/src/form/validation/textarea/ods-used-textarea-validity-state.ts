import { OdsUsedValidityState } from '../ods-used-validity-state';

export type OdsTextAreaUsedValidityState = Omit<OdsUsedValidityState, 'stepMismatch'>;

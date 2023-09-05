import { OdsTextAreaUsedValidityState } from "./ods-used-textarea-validity-state";

export interface OdsTextAreaValidityState extends OdsTextAreaUsedValidityState {
  /* is the state is invalid */
  invalid: boolean;
}

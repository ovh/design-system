import { OdsTextAreaUsedValidityState } from "../../form/validation/textarea/ods-used-textarea-validity-state";

export interface OdsTextAreaValueChangeEventDetail {
  value?: string | null;
  oldValue?: string | null;
  validity?: OdsTextAreaUsedValidityState;
}

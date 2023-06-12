import { OdsFileHeaderAttributes } from './ods-file-header-attributes';
import { odsFileDefaultAttributes } from '../ods-file-default-attributes';

export const odsFileHeaderDefaultAttributesDoc: OdsFileHeaderAttributes  = {
  isSuccessful: false,
  isErrored: false,
  disabled: odsFileDefaultAttributes.disabled,
  errorMessage: odsFileDefaultAttributes.errorMessage,
  successMessage: odsFileDefaultAttributes.successMessage,
  acceptedTypes: odsFileDefaultAttributes.acceptedTypes,
  headerTitle: odsFileDefaultAttributes.headerTitle,
  dividerLabel: odsFileDefaultAttributes.dividerLabel,
  selectFilesLabel: odsFileDefaultAttributes.selectFilesLabel
} as const;

export const odsFileHeaderDefaultAttributes = odsFileHeaderDefaultAttributesDoc;

import { OdsFileHeaderAttributes } from './ods-file-header-attributes';

export const odsFileHeaderDefaultAttributesDoc: OdsFileHeaderAttributes  = {
  disabled: false,
  errorMessage: '',
  acceptedTypes: 'image/jpg, image/png, application/pdf',
  isSuccessful: false,
} as const;

export const odsFileHeaderDefaultAttributes = odsFileHeaderDefaultAttributesDoc;

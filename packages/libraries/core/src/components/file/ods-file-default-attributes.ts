import { OdsFileAttributes, OdsFileI } from './ods-file-attributes';

export const odsFileDefaultAttributesDoc  = {
  disabled: false,
  errorMessage: '',
  acceptedTypes: 'image/jpg, image/png, application/pdf',
  files: [] as OdsFileI[],
  maxFiles: 10,
} as const;

export const odsFileDefaultAttributes = odsFileDefaultAttributesDoc as OdsFileAttributes;

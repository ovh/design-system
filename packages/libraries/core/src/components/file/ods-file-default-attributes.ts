import { OdsFileAttributes, OdsFileI } from './ods-file-attributes';

export const odsFileDefaultAttributesDoc  = {
  disabled: false,
  errorMessage: '',
  successMessage: '',
  acceptedTypes: '',
  files: [] as OdsFileI[],
  maxFiles: 10,
  headerTitle: '',
  dividerLabel: '',
  selectFilesLabel: ''
} as const;

export const odsFileDefaultAttributes = odsFileDefaultAttributesDoc as OdsFileAttributes;

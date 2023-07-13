import { OdsFileAttributes, OdsFileI } from './ods-file-attributes';

export const odsFileDefaultAttributesDoc  = {
  disabled: false,
  errorMessage: '',
  acceptedTypes: '',
  files: [] as OdsFileI[],
  maxFiles: 10,
  headerTitle: 'Glisser-déposer une pièce jointe',
  dividerLabel: 'ou',
  selectFilesLabel: 'sélectionner un fichier'
} as const;

export const odsFileDefaultAttributes = odsFileDefaultAttributesDoc as OdsFileAttributes;

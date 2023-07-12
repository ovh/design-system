import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsFileHeaderAttributes extends OdsComponentAttributes {
  isSuccessful?: boolean;
  errorMessage?: string;
  acceptedTypes?: string;
  disabled?: boolean;
  title?: string;
  dividerLabel?: string;
  selectFilesLabel?: string;
}

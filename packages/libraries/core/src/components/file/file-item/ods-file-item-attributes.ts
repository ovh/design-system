import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsFileItemAttributes extends OdsComponentAttributes {
  size: number;
  name: string;
  progress?: number;
  error?: boolean;
}

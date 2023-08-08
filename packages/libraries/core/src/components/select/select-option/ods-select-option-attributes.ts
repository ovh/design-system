import { OdsInputValue } from '../../../form/ods-input-value';
import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsSelectOptionAttributes extends OdsComponentAttributes {
  value: OdsInputValue;
  selected?: boolean;
}

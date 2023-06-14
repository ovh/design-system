import { OdsInputValue } from '../../input/public-api';
import { OdsComponentAttributes } from '../../ods-component-attributes';

export interface OdsSelectOptionAttributes extends OdsComponentAttributes {
  value: OdsInputValue;
  selected?: boolean;
}

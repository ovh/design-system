import type {ODS_SPINNER_MODE} from '../constants/spinner-mode';
import type {ODS_SPINNER_SIZE} from '../constants/spinner-size';

interface OdsSpinnerAttribute {
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** full width or not: see component principles */
  inline?: boolean;
  /** choose between infinite or progress spinner (infinite only for now) */
  mode?: ODS_SPINNER_MODE;
  /** size: see component principles */
  size?: ODS_SPINNER_SIZE;
}

export {
  OdsSpinnerAttribute,
};

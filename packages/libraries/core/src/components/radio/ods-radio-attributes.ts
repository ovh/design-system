import { OdsRadioizable } from '../../utils/radio/ods-radioizable';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsRadioAttributes extends OdsRadioizable, OdsComponentAttributes {
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * The id to an external description
   */
  ariaLabelledby?: string;
  /**
   * The checked status of the radio
   */
  checked: boolean;
  checking: boolean;
  /**
   * Radio should be disabled or not
   */
  disabled: boolean;
  /**
   * The radio corresponding label
   */
  label?: string;
  /**
   * The name corresponding to its parent radio group
   */
  name?: HTMLInputElement['name'];
  /**
   * save input allow to set a function that returns a promise.
   * It is called before each time an update is performed and allowing to manage pessimistic update strategy
   */
  save?: ({ checked, value }: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;
  beforeSave?: ({ checked, value }: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;
  afterSave?: ({ checked, value }: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;
  /**
   * Its corresponding value
   */
  value: HTMLInputElement['value'];
}

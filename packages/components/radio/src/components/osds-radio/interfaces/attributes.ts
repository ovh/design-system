import type {OdsRadioizable} from '@ovhcloud/ods-common-core';

interface OdsRadioAttribute extends OdsRadioizable {
  afterSave?: ({checked, value}: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * The id to an external description
   */
  ariaLabelledby?: string;

  beforeSave?: ({checked, value}: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;

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
  save?: ({checked, value}: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;
  /**
   * Its corresponding value
   */
  value: HTMLInputElement['value'];
}

export {
  OdsRadioAttribute,
};

import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

type OdsCheckboxAttributeCbk = ({ checked, value }: { checked: boolean, value: HTMLInputElement['value'] }) => Promise<void>;

interface OdsCheckboxAttribute extends Omit<OdsCommonFieldAttribute, 'pattern'> {
  /**
   * afterSave input allows to set a function that returns a promise.
   * It is called after each time an update was performed and allowing to manage pessimistic update strategy
   */
  afterSave?: OdsCheckboxAttributeCbk;
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * beforeSave input allows to set a function that returns a promise.
   * It is called before each time an update will be performed and allowing to manage pessimistic update strategy
   */
  beforeSave?: OdsCheckboxAttributeCbk;
  /**
   * The checked status of the checkbox
   */
  checked: boolean;
  /**
   * indicate if the checkbox is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * is the checkbox is currently focused
   */
  hasFocus: boolean;
  /**
   * save input allows to set a function that returns a promise.
   * It is called before each time an update is performed and allowing to manage pessimistic update strategy.
   * the checked state will be updated just after the call.
   */
  save?: OdsCheckboxAttributeCbk;
  /**
   * update status indicating if the checked state is being modified.
   * `updating` will be `true` until `beforeSave` or `save` are processed.
   * it is used in `pessimistic` update
   */
  updating: boolean;
  /**
   * Its corresponding value
   */
  value: HTMLInputElement['value'];
}

export type {
  OdsCheckboxAttribute,
  OdsCheckboxAttributeCbk,
};
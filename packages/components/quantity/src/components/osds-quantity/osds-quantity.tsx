import type { OsdsInput } from '@ovhcloud/ods-component-input';
import { Component, Element, Host, Listen, Prop, Watch, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsQuantityController } from './core/controller';
import type { OdsQuantityAttribute } from './interfaces/attributes';


/**
 * create type that correspond to our input component.
 * doesn't work with :
 * ```
 * // not working
 * import '@ovhcloud/ods-stencil/components/button';
 * // not working
 * import '@ovhcloud/ods-stencil/components/input/dist/types/components';
 * // OK!
 * import { OsdsInput } from '@ovhcloud/ods-stencil/components/input/dist/types';
 * type HTMLOsdsInputElement = (OsdsInput & HTMLElement);
 * ```
 * with this, we cannot build @ovhcloud/ods-components ("Component Tag Name "osds-input" Must Be Unique" error)
 */

/**
 * @slot minus - minus control
 * @slot (unnamed) - input
 * @slot plus - plus control
 */
@Component({
  tag: 'osds-quantity',
  styleUrl: 'osds-quantity.scss',
  shadow: true,
})
export class OsdsQuantity implements OdsQuantityAttribute {
  @Element() el!: HTMLElement;

  controller: OdsQuantityController = new OdsQuantityController(this);
  input: (OsdsInput & HTMLElement) | HTMLInputElement | null = null;
  minus: HTMLSlotElement | null = null;
  plus: HTMLSlotElement | null = null;

  /** @see OdsQuantityAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Watch('disabled')
  updateDisableOnChild(disabled: boolean) {
    this.controller.setDisabledOnChildren(disabled);
  }

  /** @see OdsQuantityBehavior.afterInit */
  afterInit(): void {
    this.controller.processInputValueChange();
  }

  /** @see OdsQuantityBehavior.afterRender */
  afterRender(): void {
    this.controller.initInput();
    this.controller.initSlots();
  }

  /** @see OdsQuantityBehavior.onDestroy */
  onDestroy(): void {
    this.controller.clearEventListeners();
  }

  componentDidRender(): void {
    this.afterRender();
  }

  componentDidLoad(): void {
    this.afterInit();
  }

  disconnectedCallback(): void {
    this.onDestroy();
  }

  @Listen('odsValueChange')
  odsValueChangeHandler() {
    this.controller.processInputValueChange();
  }

  render() {
    return (
      <Host>
        <slot name={'minus'}
          {...{
            ref: (el: any) => this.minus = el as HTMLSlotElement,
            onClick: () => this.controller.minusClickHandler(),
          }}></slot>
        <slot></slot>
        <slot name={'plus'}
          {...{
            ref: (el: any) => this.plus = el as HTMLSlotElement,
            onClick: () => this.controller.plusClickHandler(),
          }}></slot>
      </Host>
    );
  }
}

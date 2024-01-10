import type { OdsQuantityAttribute } from './interfaces/attributes';
import type { OsdsInput } from '../../../../input/src';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Element, Host, Listen, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsQuantityController } from './core/controller';

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

@Component({
  shadow: true,
  styleUrl: 'osds-quantity.scss',
  tag: 'osds-quantity',
})
export class OsdsQuantity implements OdsQuantityAttribute {
  controller: OdsQuantityController = new OdsQuantityController(this);
  input: (OsdsInput & HTMLElement) | HTMLInputElement | null = null;
  minus: HTMLSlotElement | null = null;
  plus: HTMLSlotElement | null = null;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Watch('disabled')
  updateDisableOnChild(disabled: boolean): void {
    this.controller.setDisabledOnChildren(disabled);
  }

  @Listen('odsValueChange')
  odsValueChangeHandler(): void {
    this.controller.processInputValueChange();
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

  render(): FunctionalComponent {
    return (
      <Host>
        <slot name={'minus'}
          {...{
            onClick: () => this.controller.minusClickHandler(),
            ref: (el: any) => this.minus = el as HTMLSlotElement,
          }}></slot>
        <slot></slot>
        <slot name={'plus'}
          {...{
            onClick: () => this.controller.plusClickHandler(),
            ref: (el: any) => this.plus = el as HTMLSlotElement,
          }}></slot>
      </Host>
    );
  }
}

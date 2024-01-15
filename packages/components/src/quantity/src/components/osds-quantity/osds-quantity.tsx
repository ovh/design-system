import type { OdsQuantityAttribute } from './interfaces/attributes';
import type { OsdsInput } from '../../../../input/src';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
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

/**
 * @slot minus - minus control
 * @slot (unnamed) - input
 * @slot plus - plus control
 */
@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-quantity.scss',
  tag: 'osds-quantity',
})
export class OsdsQuantity implements OdsQuantityAttribute {
  @Element() el!: HTMLElement;

  controller: OdsQuantityController = new OdsQuantityController(this);
  input: (OsdsInput & HTMLElement) | HTMLInputElement | null = null;
  minus: HTMLSlotElement | null = null;
  plus: HTMLSlotElement | null = null;

  /** @see OdsQuantityAttributes.ariaLabel */
  @Prop({ reflect: true }) ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsQuantityAttributes.disabled */
  @Prop({ mutable: true, reflect: true }) public disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsQuantityAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsQuantityAttributes.error */
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsQuantityAttributes.name */
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsDatepickerAttribute.value */
  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Watch('disabled')
  updateDisableOnChild(disabled: boolean): void {
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
  odsValueChangeHandler(): void {
    this.controller.processInputValueChange();
  }

  render(): FunctionalComponent {
    return (
      <Host ariaLabel={this.ariaLabel}>
        <slot name={'minus'}
          {...{
            onClick: () => this.controller.minusClickHandler(),
            ref: (el?: Element) => this.minus = el as HTMLSlotElement,
          }}></slot>
        <slot></slot>
        <slot name={'plus'}
          {...{
            onClick: () => this.controller.plusClickHandler(),
            ref: (el?: Element) => this.plus = el as HTMLSlotElement,
          }}></slot>
      </Host>
    );
  }
}

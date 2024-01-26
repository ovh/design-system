import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { OdsPasswordEvent, OdsPasswordValueChangeEventDetail } from './interfaces/events';
import type { OdsPasswordMethod } from './interfaces/methods';
import type { OdsInputValueChangeEvent, OsdsInput } from '../../../../input/src';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPasswordController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';

/**
 * @slot (unnamed) - Password content
 */
@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-password.scss',
  tag: 'osds-password',
})
export class OsdsPassword implements OdsPasswordAttribute, OdsPasswordEvent, OdsPasswordMethod {
  private controller = new OdsPasswordController(this);
  private osdsInput?: OsdsInput;

  @State() tabindex?: number;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby?: string;

  @Prop({ reflect: true }) clearable?: boolean;

  @Prop({ reflect: true }) defaultValue: string | null = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true }) forbiddenValues?: OdsInputValue[];

  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) label?: string;

  @Prop({ reflect: true }) loading?: boolean;

  @Prop({ mutable: true, reflect: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true }) placeholder?: string;

  @Prop({ reflect: true }) prefixValue?: string;

  @Prop({ reflect: true }) readOnly?: boolean;

  @Prop({ reflect: true }) required?: boolean;

  @Prop({ mutable: true, reflect: true }) value = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;

  @Event() odsClear!: EventEmitter<void>;

  @Event() odsFocus!: EventEmitter<void>;

  @Event() odsHide!: EventEmitter<void>;

  @Event() odsReset!: EventEmitter<void>;

  @Event() odsValueChange!: EventEmitter<OdsPasswordValueChangeEventDetail>;

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    const inputEl = await this.osdsInput?.getInputEl();
    if (inputEl) {
      return this.controller.getValidity(inputEl);
    }
    return undefined;
  }

  @Method()
  async clear(): Promise<void> {
    return this.controller.clear();
  }

  @Method()
  async hide(): Promise<void> {
    return this.controller.hide();
  }

  @Method()
  async reset(): Promise<void> {
    return this.controller.reset();
  }

  @Listen('focus')
  @Method()
  async setFocus(): Promise<void> {
    return this.osdsInput?.setFocus();
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    return this.controller.setTabindex(value);
  }

  @Listen('odsValueChange')
  onValueChange(event: OdsInputValueChangeEvent): void {
    this.controller.onValueChange(event);
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
  }

  formResetCallback(): void {
    this.reset();
  }

  render(): JSX.Element {
    return (
      <Host tabindex={this.tabindex}>
        <osds-input
          ref={ (el?: HTMLElement): OsdsInput => this.osdsInput = el as OsdsInput & HTMLElement }
          type={ODS_INPUT_TYPE.password}
          ariaLabel={this.ariaLabel}
          ariaLabelledby={this.ariaLabelledby}
          clearable={this.clearable}
          defaultValue={this.defaultValue}
          disabled={this.disabled}
          error={this.error}
          forbiddenValues={this.forbiddenValues}
          inline={this.inline}
          label={this.label}
          loading={this.loading}
          masked={this.masked}
          name={this.name}
          placeholder={this.placeholder}
          prefixValue={this.prefixValue}
          readOnly={this.readOnly}
          required={this.required}
          value={this.value}
        ></osds-input>
      </Host>
    );
  }
}

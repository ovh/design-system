import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { OdsPasswordEvent } from './interfaces/events';
import type { ODS_INPUT_SIZE, OdsInputValueChangeEvent } from '../../../../input/src';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import type { OdsPasswordMethod } from './interfaces/methods';
import { ODS_INPUT_TYPE, OsdsInput } from '../../../../input/src';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPasswordController } from './core/controller';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-password.scss',
  tag: 'osds-password',
})
export class OsdsPassword implements OdsPasswordAttribute, OdsPasswordEvent, OdsPasswordMethod {
  private controller = new OdsPasswordController(this);

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) forbiddenValues?: OdsInputValue[] = DEFAULT_ATTRIBUTE.forbiddenValues;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;
  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;
  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;
  @Prop({ reflect: true }) size?: ODS_INPUT_SIZE = DEFAULT_ATTRIBUTE.size;
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEvent>;

  @Listen('odsInputBlur')
  onInputBlur() {
    this.odsBlur.emit();
  }

  @Listen('odsInputFocus')
  onInputFocus() {
    this.odsFocus.emit();
  }

  @Listen('odsValueChange')
  onValueChange(event: OdsInputValueChangeEvent): void {
    this.controller.onValueChange(event);
  }

  componentWillLoad() {
    this.controller.beforeInit();
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.osdsInput?.getValidity() ?? undefined;
  }

  @Method()
  async clear(): Promise<void> {
    this.osdsInput?.clear();
  }

  @Method()
  async hide(): Promise<void> {
    this.osdsInput?.hide();
  }

  @Method()
  async reset(): Promise<void> {
    this.osdsInput?.reset();
  }

  @Method()
  async setFocus(): Promise<void> {
    this.osdsInput?.setFocus();
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    this.osdsInput?.setTabindex(value);
  }

  render() {
    return (
      <Host>
        <osds-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          clearable={ this.clearable }
          disabled={ this.disabled }
          error={ this.error }
          forbiddenValues={ this.forbiddenValues }
          inline={ this.inline }
          label={ this.label }
          loading={ this.loading }
          masked={ this.masked }
          name={ this.name }
          placeholder={ this.placeholder }
          readOnly={ this.readOnly }
          ref={ (el?: HTMLElement): OsdsInput => this.osdsInput = el as OsdsInput & HTMLElement }
          required={ this.required }
          size={ this.size }
          type={ ODS_INPUT_TYPE.password }
          value={ this.value }>
        </osds-input>
      </Host>
    );
  }
}

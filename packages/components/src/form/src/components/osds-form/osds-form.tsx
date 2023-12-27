import type { OdsFormAttribute } from './interfaces/attributes';
import type { OdsFormEvent } from './interfaces/event';
import type { OdsFormMethod } from './interfaces/methods';
import type { FunctionalComponent } from '@stencil/core';
import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, h, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsInputValue, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsFormController } from './core/controller';

/**
 * @slot (unnamed) - Form content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-form.scss',
  tag: 'osds-form',
})
export class OsdsForm implements OdsFormAttribute, OdsFormEvent, OdsFormMethod {
  readonly logger = new OdsLogger('OdsForm');
  private readonly controller = new OdsFormController(this);
  private readonly internalMap = new Map<string, { value: OdsInputValue, error: boolean }>();
  private formEl?: HTMLFormElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public initialValues = DEFAULT_ATTRIBUTE.initialValues;

  @Event() odsOnSubmit!: EventEmitter<Record<string, OdsInputValue>>
  @Event() odsOnReset!: EventEmitter<void>

  @Method()
  async isFormValid(): Promise<boolean> {
    return ![...this.internalMap].some(([, { error }]) => error);
  }

  @Method()
  async getFieldError(name: string): Promise<boolean | undefined> {
    return this.internalMap.get(name)?.error;
  }

  @Method()
  async setFieldError(name: string, error: boolean): Promise<void> {
    const element = this.getSlotElementByName(name);
    element?.setAttribute('error', error.toString());
    const value = this.internalMap.get(name)?.value;
    this.internalMap.set(name, { value: value ?? '', error });  }

  @Method()
  async getFieldValue(name: string): Promise<OdsInputValue | undefined> {
    return this.internalMap.get(name)?.value;
  }

  @Method()
  async setFieldValue(name: string, value: OdsInputValue): Promise<void> {
    const element = this.getSlotElementByName(name);
    element?.setAttribute('value', value?.toString() ?? '');
    const error =  this.internalMap.get(name)?.error;
    this.internalMap.set(name, { value, error: error ?? false });
  }

  @Method()
  async getFormValues(): Promise<Record<string, OdsInputValue>> {
    return this.getValuesToRecord();
  }

  @Method()
  async getFormErrors(): Promise<Record<string, boolean>> {
    return this.getErrorsToRecord();
  }

  @Method()
  async submit(): Promise<void> {
    if (!await this.isFormValid()) {
      return;
    }
    this.formEl?.submit();
  }

  @Method()
  async reset(): Promise<void> {
    console.log('reset')
    this.onInitialValuesChange();
    this.formEl?.reset();
    this.odsOnReset.emit();
  }

  componentWillLoad(): void {
    this.onInitialValuesChange();
  }

  @Watch('initialValues')
  onInitialValuesChange(): void {
    const initialValues = this.controller.getInitialValues();

    Object.entries(initialValues).forEach(([name, value]) => {
      this.setFieldError(name, false);
      this.setFieldValue(name, value);
    });
  }

  async onSubmit(event?: Event): Promise<void> {
    event?.preventDefault();
    if (!await this.isFormValid()) {
      return;
    }
    this.odsOnSubmit.emit(this.getValuesToRecord());
  }

  onReset(): void {
    console.log('onReset');
    this.reset();
  }

  private getValuesToRecord(): Record<string, OdsInputValue> {
    return [...this.internalMap].reduce((acc, [key, { value }]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, OdsInputValue>);
  }

  private getErrorsToRecord(): Record<string, boolean> {
    return [...this.internalMap].reduce((acc, [key, { error }]) => {
      acc[key] = error;
      return acc;
    }, {} as Record<string, boolean>);
  }

  private getSlotElementByName(name: string): Element | undefined {
    const element = this.el.querySelector(`[name="${name}"]`);
    if (!element) {
      this.logger.warn(`Element with name: ${name} not found, the initial value can't be set`);
      return;
    }
    return element;
  }

  @Listen('odsValueChange')
  onValueChange({ detail }: CustomEvent<OdsInputValueChangeEventDetail>): void {
    console.log('detail', detail);
    // todo get the event with the name & update internalMap
    this.internalMap.set(detail.name, { value: detail.value, error: detail.validity.invalid });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-form">
        <form
          ref={(el) => this.formEl = el as HTMLFormElement}
          onSubmit={(event) => this.onSubmit(event)}
          onReset={() => this.onReset()}>
          <slot></slot>
        </form>
      </Host>
    );
  }
}

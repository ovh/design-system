import type { OdsFormAttribute } from './interfaces/attributes';
import type { OdsFormEvent } from './interfaces/event';
import type { OdsFormMethod } from './interfaces/methods';
import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
import type { OdsCommonFieldMethod, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { Component, Element, Event, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsFormController } from './core/controller';

@Component({
  shadow: true,
  tag: 'osds-form',
})
export class OsdsForm implements OdsFormAttribute, OdsFormEvent, OdsFormMethod {
  private readonly controller = new OdsFormController(this);
  private readonly internalMap = new Map<string, { value: OdsInputValue, error: boolean }>();
  private formEl?: HTMLFormElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public initialValues = DEFAULT_ATTRIBUTE.initialValues;

  @Event() odsOnSubmit!: EventEmitter<Record<string, OdsInputValue>>;
  @Event() odsOnReset!: EventEmitter<void>;

  @Method()
  async isFormValid(): Promise<boolean> {
    return ![...this.internalMap].some(([, { error }]) => {
      return error;
    });
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
    this.internalMap.set(name, { error, value: value ?? '' });
  }

  @Method()
  async getFieldValue(name: string): Promise<OdsInputValue | undefined> {
    return this.internalMap.get(name)?.value;
  }

  @Method()
  async setFieldValue(name: string, value: OdsInputValue): Promise<void> {
    const element = this.getSlotElementByName(name);
    element?.setAttribute('value', value?.toString() ?? '');
    const error = this.internalMap.get(name)?.error;
    this.internalMap.set(name, { error: error ?? false, value });
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
    const initialValues = this.controller.getInitialValues();
    Object.entries(initialValues).forEach(async([name]) => {
      const element = this.getSlotElementByName(name);
      if (!element) {
        return;
      }
      const validity = await element?.getValidity();
      this.setFieldError(name, !validity?.valid ?? false);
    });
    if (!await this.isFormValid()) {
      return;
    }
    this.odsOnSubmit.emit(this.getValuesToRecord());
  }

  onReset(): void {
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

  private getSlotElementByName(name: string): (Element & OdsCommonFieldMethod) | undefined {
    const element = this.el.querySelector(`[name="${name}"]`);
    if (!element) {
      console.warn(`Element with name: ${name} not found`);
      return;
    }
    return element as Element & OdsCommonFieldMethod;
  }

  @Listen('odsValueChange')
  onValueChange({ detail }: CustomEvent<OdsInputValueChangeEventDetail>): void {
    const error = detail.validity ? !detail.validity.valid : false;
    this.internalMap.set(detail.name, { error, value: detail.value });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-form">
        <form
          ref={(el): HTMLFormElement => this.formEl = el as HTMLFormElement}
          onSubmit={(event): Promise<void> => this.onSubmit(event)}
          onReset={(): void => this.onReset()}>
          <slot></slot>
        </form>
      </Host>
    );
  }
}

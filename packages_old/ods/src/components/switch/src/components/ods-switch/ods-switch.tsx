import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { ODS_SWITCH_SIZE, type OdsSwitchSize } from '../../constant/switch-size';
import { clearItems, focusFirstSwitchItem, getInitialValueState, getValidationMessageFromChildren, getValidityStateFromChildren, getWillValidateFromChildren, propagateInputId, propagateIsDisabled, propagateIsRequired, propagateName, reportValidityFromOneChild, resetItems } from '../../controller/ods-switch';
import { type OdsSwitchChangeEventDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-switch.scss',
  tag: 'ods-switch',
})
export class OdsSwitch implements OdsFormElement {
  @Element() el!: HTMLElement;

  @State() private isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public size: OdsSwitchSize = ODS_SWITCH_SIZE.md;

  @Event() odsBlur!: EventEmitter<CustomEvent<void>>;
  @Event() odsChange!: EventEmitter<OdsSwitchChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<CustomEvent<void>>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('odsSwitchItemBlur')
  onOdsSwitchItemBlur(event: CustomEvent<void>): void {
    event.stopImmediatePropagation();
    this.odsBlur.emit();
  }

  @Listen('odsSwitchItemChange')
  onOdsSwitchItemChange(event: CustomEvent<OdsSwitchChangeEventDetail>): void {
    event.stopImmediatePropagation();
    this.odsChange.emit(event.detail);
  }

  @Listen('odsSwitchItemFocus')
  onOdsSwitchItemFocus(event: CustomEvent<void>): void {
    event.stopImmediatePropagation();
    this.odsFocus.emit();
  }

  @Listen('odsSwitchItemInvalid')
  onOdsInvalid(event: CustomEvent<{ isInvalid: boolean }>): void {
    event.stopImmediatePropagation();
    this.isInvalid = event.detail.isInvalid;
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    const validityState = await getValidityStateFromChildren(Array.from(this.el.children));
    this.isInvalid = !validityState.valid;
    return validityState.valid;
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();
    await clearItems(Array.from(this.el.children));
    focusFirstSwitchItem(Array.from(this.el.children));

    this.odsChange.emit({
      name: this.name,
      validity: await getValidityStateFromChildren(Array.from(this.el.children)),
      value: null,
    });
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return getValidationMessageFromChildren(Array.from(this.el.children));
  }

  @Method()
  public async getValidity(): Promise<ValidityState> {
    return getValidityStateFromChildren(Array.from(this.el.children));
  }

  @Method()
  public async reportValidity(): Promise<boolean | undefined> {
    const isValid = await reportValidityFromOneChild(Array.from(this.el.children));
    this.isInvalid = !isValid;
    return isValid;
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsReset.emit();
    const newValue = await resetItems(Array.from(this.el.children));

    this.odsChange.emit({
      name: this.name,
      validity: await getValidityStateFromChildren(Array.from(this.el.children)),
      value: newValue,
    });
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return getWillValidateFromChildren(Array.from(this.el.children));
  }

  @Watch('isDisabled')
  onIsDisabledChange(value: boolean): void {
    propagateIsDisabled(value, Array.from(this.el.children));
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  @Watch('isRequired')
  onIsRequiredChange(value: boolean): void {
    propagateIsRequired(value, Array.from(this.el.children));
  }

  @Watch('name')
  onNameChange(value: string): void {
    propagateName(value, Array.from(this.el.children));
  }

  componentDidLoad(): void {
    // Child elements are not yet updated with prop propagation, so we manage the change value manually
    const { validity, value } = getInitialValueState(Array.from(this.el.children), this.isRequired);

    this.odsChange.emit({
      name: this.name,
      validity,
      value,
    });
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private init(): void {
    this.onIsDisabledChange(this.isDisabled ?? false);
    this.onIsRequiredChange(this.isRequired ?? false);
    this.onNameChange(this.name);
    propagateInputId(this.name, Array.from(this.el.children));
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          [`ods-switch ods-switch--${this.size}`]: true,
          'ods-switch--disabled': !!this.isDisabled,
          'ods-switch--error': this.hasError || !!this.isInvalid,
        }}
        disabled={ this.isDisabled }>
        <slot onSlotchange={ () => this.init() }></slot>
      </Host>
    );
  }
}

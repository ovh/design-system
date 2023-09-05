import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsRadioGroupEvent } from './interfaces/events';
import type { OdsRadioGroupAttribute } from './interfaces/attributes';
import type { OdsRadioGroupMethod } from './interfaces/methods';
import type { OsdsRadio } from '../osds-radio/osds-radio';
import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { OdsRadioGroupController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  tag: 'osds-radio-group',
  styleUrl: 'osds-radio-group.scss',
  shadow: true,
})
export class OsdsRadioGroup implements OdsRadioGroupAttribute, OdsRadioGroupEvent, OdsRadioGroupMethod {
  private static radioGroupIds = 0;
  inputId = `ods-radio-group-${OsdsRadioGroup.radioGroupIds++}`;
  private labelId = `${this.inputId}-lbl`;
  private label?: HTMLStencilElement | null;
  controller = new OdsRadioGroupController(this);

  @Element() el!: HTMLStencilElement;
  radios: OsdsRadio[] = [];

  /** @see OdsRadioGroupAttributes.name */
  @Prop() name: string = DEFAULT_ATTRIBUTE.name || this.inputId;

  /** @see OdsRadioGroupAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: string = DEFAULT_ATTRIBUTE.value;

  /** @see OdsRadioGroupAttributes.disabled */
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsRadioGroupAttributes.save */
  @Prop() save? = DEFAULT_ATTRIBUTE.save;

  /** @see OdsRadioGroupAttributes.beforeSave */
  @Prop() beforeSave? = DEFAULT_ATTRIBUTE.beforeSave;

  /** @see OdsRadioGroupAttributes.afterSave */
  @Prop() afterSave? = DEFAULT_ATTRIBUTE.afterSave;

  /** @see OdsRadioGroupAttributes.required */
  @Prop({ reflect: true }) public required = DEFAULT_ATTRIBUTE.required;

  /** @see OdsRadioGroupEvents.odsValueChange */
  @Event({
    bubbles: true,
    composed: true
  }) odsValueChange!: EventEmitter<{ newValue?: string, previousValue?: string }>;

  /** @see OdsRadioGroupEvents.odsDisabledChange */
  @Event({ bubbles: true, composed: true }) odsDisabledChange!: EventEmitter<{ value: boolean }>;

  @Watch('value')
  valueChanged(newValue: string, previousValue: string) {
    this.controller.onValueChange(newValue, previousValue);
  }

  @Watch('disabled')
  watchDisabled(disabled: boolean) {
    this.controller.onDisabledChange(disabled);
  }

  emitChange(newValue: string, previousValue: string): void {
    this.odsValueChange.emit({ newValue, previousValue });
  }

  emitDisabled(disabled: boolean): void {
    this.odsDisabledChange.emit({ value: disabled });
  }

  /** @see OdsRadioGroupMethods.getRadios */
  @Method()
  async getRadios(): Promise<OsdsRadio[]> {
    return this.radios;
  }

  /** @see OdsRadioGroupMethods.registerRadio */
  @Method()
  async registerRadio(radio: OsdsRadio) {
    this.controller.registerRadio(radio);
  }

  /** @see OdsRadioGroupMethods.unregisterRadio */
  @Method()
  async unregisterRadio(radio: OsdsRadio) {
    this.controller.unregisterRadio(radio);
  }

  /** @see OdsRadioGroupMethods.updateState */
  @Method()
  async updateState({ newValue, checked, checking }: { newValue: string, checked: boolean, checking: boolean }) {
    await this.controller.updateState({ newValue, checked, checking });
  }

  onDestroy(): void {
    this.controller.clearRadios();
  }

  disconnectedCallback() {
    this.onDestroy();
  }

  private handleLabelClick(event: PointerEvent) {
    this.controller.handleLabelClick(event);
  }

  render() {
    const { label, labelId, name } = this;

    return (
      <Host {...{
        'aria-labelledby': label ? labelId : null,
        name,
        role: 'radiogroup',
      }}
            onClick={this.handleLabelClick.bind(this)}
      >
        <slot></slot>
      </Host>
    );
  }
}

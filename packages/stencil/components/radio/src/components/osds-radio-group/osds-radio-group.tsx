import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import {
  OdsRadio,
  OdsRadioGroup,
  OdsRadioGroupController,
  OdsRadioGroupEvents,
  OdsRadioGroupMethods,
  odsRadioGroupDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * @slot (unnamed) - Radio content
 */
@Component({
  tag: 'osds-radio-group',
  styleUrl: 'osds-radio-group.scss',
  shadow: true,
})
export class OsdsRadioGroup implements OdsRadioGroup<OdsStencilMethods<OdsRadioGroupMethods>, OdsStencilEvents<OdsRadioGroupEvents>> {
  private static radioGroupIds = 0;
  inputId = `ods-radio-group-${OsdsRadioGroup.radioGroupIds++}`;
  private labelId = `${this.inputId}-lbl`;
  private label?: HTMLStencilElement | null;
  controller: OdsRadioGroupController = new OdsRadioGroupController(this);

  @Element() el!: HTMLStencilElement;
  radios: (HTMLElement & OdsRadio)[] = [];

  /** @see OdsRadioGroupAttributes.name */
  @Prop() name: string = odsRadioGroupDefaultAttributes.name || this.inputId;

  /** @see OdsRadioGroupAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: string = odsRadioGroupDefaultAttributes.value;

  /** @see OdsRadioGroupAttributes.disabled */
  @Prop({ reflect: true }) disabled: boolean = odsRadioGroupDefaultAttributes.disabled;

  /** @see OdsRadioGroupAttributes.save */
  @Prop() save? = odsRadioGroupDefaultAttributes.save;

  /** @see OdsRadioGroupAttributes.beforeSave */
  @Prop() beforeSave? = odsRadioGroupDefaultAttributes.beforeSave;

  /** @see OdsRadioGroupAttributes.afterSave */
  @Prop() afterSave? = odsRadioGroupDefaultAttributes.afterSave;

  /** @see OdsRadioGroupAttributes.required */
  @Prop({ reflect: true }) public required = odsRadioGroupDefaultAttributes.required;

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
  async getRadios(): Promise<(HTMLElement & OdsRadio)[]> {
    return this.radios;
  }

  /** @see OdsRadioGroupMethods.registerRadio */
  @Method()
  async registerRadio(radio: (HTMLElement & OdsRadio)) {
    this.controller.registerRadio(radio);
  }

  /** @see OdsRadioGroupMethods.unregisterRadio */
  @Method()
  async unregisterRadio(radio: (HTMLElement & OdsRadio)) {
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

import type { ODS_SWITCH_SIZE } from './constants/switch-size';
import type { ODS_SWITCH_VARIANT } from './constants/switch-variant';
import type{ OdsSwitchAttribute } from './interfaces/attributes';
import type { OdsSwitchChangedEventDetail, OdsSwitchEvent } from './interfaces/events';
import type { OdsRadioGroupValueChangeEvent } from '../../../../radio/src';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { Component, Element, Event, Host, Listen, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsSwitchController } from './core/controller';

@Component({
  shadow: true,
  styleUrl: 'osds-switch.scss',
  tag: 'osds-switch',
})
export class OsdsSwitch implements OdsSwitchAttribute, OdsSwitchEvent {
  controller = new OdsSwitchController(this);
  @Element() el!: HTMLElement;

  @State() tabindex = 0;

  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  @Prop({ reflect: true }) public variant?: ODS_SWITCH_VARIANT = DEFAULT_ATTRIBUTE.variant;

  @Prop({ reflect: true }) public size?: ODS_SWITCH_SIZE = DEFAULT_ATTRIBUTE.size;

  @Event() odsSwitchChanged!: EventEmitter<OdsSwitchChangedEventDetail>;

  @Listen('odsValueChange')
  handlerSwitchItemClick(event: OdsRadioGroupValueChangeEvent | CustomEvent<{ value: string }>): void {
    if (this.disabled) {
      return;
    }
    const value = 'newValue' in event.detail ? event.detail.newValue : event.detail.value;
    const { current, previous } = this.controller.changeCheckedSwitchItem(value);
    this.handlerFocus();
    this.emitChanged(current.value, previous?.value);
  }

  async handlerFocus(): Promise<void> {
    const selectedSwitchItem = this.controller.finCheckedSwitchItem();
    await selectedSwitchItem?.setFocus();
  }

  handlerOnKeyDown(event: KeyboardEvent): void {
    switch (event.code) {
    case 'ArrowLeft':
      this.controller.findPreviousSwitchItem()?.setFocus();
      break;
    case 'ArrowRight':
      this.controller.findNextSwitchItem()?.setFocus();
      break;
    default:
      break;
    }
  }

  emitChanged(current: string, previous?: string): void {
    this.odsSwitchChanged.emit({ current, previous });
  }

  render(): FunctionalComponent {
    const { variant, color, contrasted, disabled, size, tabindex } = this;

    return (
      <Host {...{
        color,
        contrasted,
        disabled,
        onFocus: () => this.handlerFocus(),
        onKeyDown: (event: KeyboardEvent) => this.handlerOnKeyDown(event),
        size,
        tabindex,
        variant,
      }}>
        <osds-radio-group disabled={disabled}>
          <slot></slot>
        </osds-radio-group>
      </Host>
    );
  }
}

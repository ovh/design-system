import { Component, Element, Host, h, Prop, EventEmitter, Event, Listen, State } from '@stencil/core';
import {
  OdsSwitch,
  OdsSwitchController,
  OdsSwitchEvents,
  OdsSwitchMethods,
  odsSwitchDefaultAttributes,
  OdsSwitchChangedEventDetail,
  OdsSwitchSize,
  OdsSwitchVariant,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Switch content
 */
@Component({
  tag: 'osds-switch',
  styleUrl: 'osds-switch.scss',
  shadow: true
})
export class OsdsSwitch implements OdsSwitch<OdsStencilMethods<OdsSwitchMethods>, OdsStencilEvents<OdsSwitchEvents>> {
  controller: OdsSwitchController = new OdsSwitchController(this);
  @Element() el!: HTMLElement;

  @State() tabindex = 0;

  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsSwitchDefaultAttributes.color;
  
  @Prop({ reflect: true }) public disabled?: boolean = odsSwitchDefaultAttributes.disabled;

  @Prop({ reflect: true }) public contrasted?: boolean = odsSwitchDefaultAttributes.contrasted;

  @Prop({ reflect: true }) public variant?: OdsSwitchVariant = odsSwitchDefaultAttributes.variant;

  @Prop({ reflect: true }) public size?: OdsSwitchSize = odsSwitchDefaultAttributes.size;

  @Event() odsSwitchChanged!: EventEmitter<OdsSwitchChangedEventDetail>;

  @Listen('odsSwitchItemClick')
  hanlderSwitchItemClick(value: CustomEvent<{ value: string }>) {
    if (this.disabled) {
      return;
    }
    const { current, old } = this.controller.changeCheckedSwitchItem(value.detail.value);
    this.handlerFocus();
    this.emitChanged(current.value, old.value);
  }

  handlerFocus(): void {
    const selectedSwitchItem = this.controller.findSelectedSwitchItem();
    selectedSwitchItem?.setFocus();
  }

  handlerOnKeyDown(event: KeyboardEvent): void {
    const isArrowLeft = event.code === 'ArrowLeft';
    const isArrowRight = event.code === 'ArrowRight';
    if (isArrowRight || isArrowLeft) {
      if (isArrowLeft) {
        const previosSwitchItem = this.controller.findPreviousSwitchItem();
        previosSwitchItem?.setFocus();
      }

      if (isArrowRight) {
        const nextSwitchItem = this.controller.findNextSwitchItem();
        nextSwitchItem?.setFocus();
      }
    }
  }

  emitChanged(current: string, oldCurrent?: string): void {
    this.odsSwitchChanged.emit({ current, oldCurrent });
  }

  render() {
    const { variant, color, contrasted, disabled, size, tabindex } = this;

    return (
      <Host {...{
        variant,
        color,
        contrasted,
        disabled,
        size,
        tabindex,
        onFocus: () => this.handlerFocus(),
        onKeyDown: (event: KeyboardEvent) => this.handlerOnKeyDown(event),
      }}>
        <slot></slot>
      </Host>
    );
  }
}
 
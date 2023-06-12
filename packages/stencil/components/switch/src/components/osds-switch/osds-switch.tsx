import { Component, Element, Host, h, Prop, EventEmitter, Event, Listen } from '@stencil/core';
import {
  OdsSwitch,
  OdsSwitchController,
  OdsSwitchEvents,
  OdsSwitchMethods,
  odsSwitchDefaultAttributes,
  OdsSwitchChangedEventDetail,
  OdsSwitchSize,
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

  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsSwitchDefaultAttributes.color;
  
  @Prop({ reflect: true }) public disabled?: boolean = odsSwitchDefaultAttributes.disabled;

  @Prop({ reflect: true }) public contrasted?: boolean = odsSwitchDefaultAttributes.contrasted;

  @Prop({ reflect: true }) public variant?: string = odsSwitchDefaultAttributes.variant;

  @Prop({ reflect: true }) public size?: OdsSwitchSize = odsSwitchDefaultAttributes.size;

  @Event() odsSwitchChanged!: EventEmitter<OdsSwitchChangedEventDetail>;

  @Listen('odsSwitchItemClick')
  hanlderSwitchItemClick(value: CustomEvent<{ value: string }>) {
    if (this.disabled) {
      return;
    }
    this.controller.changeCheckedSwitchItem(value.detail.value);
  }

  render() {
    const { variant, color, contrasted, disabled, size } = this;

    return (
      <Host {...{
        variant,
        color,
        contrasted,
        disabled,
        size,
      }}>
        <slot></slot>
      </Host>
    );
  }
}
 
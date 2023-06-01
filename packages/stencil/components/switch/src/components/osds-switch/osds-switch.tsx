import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsSwitch,
  OdsSwitchController,
  OdsSwitchEvents,
  OdsSwitchMethods,
  // odsSwitchDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

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

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsSwitchDefaultAttributes.color;

  /**
   * @see OdsSwitchBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {

    return (
      <Host>

        {/* UI template */}

      </Host>
    );
  }
}

import { Component, Element, Host, Prop, h } from '@stencil/core';
import {
  OdsDivider,
  OdsDividerController,
  OdsDividerEvents,
  OdsDividerMethods,
  OdsDividerSize,
  odsDividerDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-divider',
  styleUrl: 'osds-divider.scss',
  shadow: true
})
export class OsdsDivider implements OdsDivider<OdsStencilMethods<OdsDividerMethods>, OdsStencilEvents<OdsDividerEvents>> {
  controller: OdsDividerController = new OdsDividerController(this);

  @Element() el!: HTMLElement;

  /** @see OdsDividerAttributes.separator */
  @Prop({ reflect: true }) public separator? = odsDividerDefaultAttributes.separator;

  /** @see OdsDividerAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsDividerDefaultAttributes.color;

  /** @see OdsDividerAttributes.size */
  @Prop({ reflect: true }) public size?: OdsDividerSize = odsDividerDefaultAttributes.size;

  /** @see OdsDividerAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsDividerDefaultAttributes.contrasted;

  render() {
    const { separator } = this;

    return (
      <Host>
        { separator ? <hr></hr> : <span></span> }
      </Host>
    );
  }
}

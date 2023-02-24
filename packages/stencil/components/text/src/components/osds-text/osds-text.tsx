import { Component, Host, Prop, h } from '@stencil/core';
import {
  OdsText,
  OdsTextController,
  odsTextDefaultAttributes,
  OdsTextEvents,
  OdsTextLevel,
  OdsTextMethods,
  OdsTextSize
} from '@ovhcloud/ods-core';
import { odsGenerateColorVariable, OdsThemeColorHue, OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Text content
 */
@Component({
  tag: 'osds-text',
  styleUrl: 'osds-text.scss',
  shadow: true,
})
export class OsdsText implements OdsText<OdsStencilMethods<OdsTextMethods>, OdsStencilEvents<OdsTextEvents>> {
  controller: OdsTextController = new OdsTextController(this);

  /** @see OdsTextAttributes.breakSpaces */
  @Prop({ reflect: true }) public breakSpaces? = odsTextDefaultAttributes.breakSpaces;

  /** @see OdsTextAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsTextDefaultAttributes.color;

  /** @see OdsTextAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsTextDefaultAttributes.contrasted;

  /** @see OdsTextAttributes.size */
  @Prop({ reflect: true }) public size?: OdsTextSize = odsTextDefaultAttributes.size;

  /** @see OdsTextAttributes.level */
  @Prop({ reflect: true }) public level?: OdsTextLevel = odsTextDefaultAttributes.level;

  /** @see OdsTextAttributes.hue */
  @Prop({ reflect: true }) public hue?: OdsThemeColorHue = odsTextDefaultAttributes.hue;

  render() {
    return (
      <Host {...{
        style: {
          '--osds-text-color-specific-hue': this.color && this.hue ? `var(${odsGenerateColorVariable(this.color, this.hue)})` : '',
        }
      }}>
        <slot></slot>
      </Host>
    );
  }
}

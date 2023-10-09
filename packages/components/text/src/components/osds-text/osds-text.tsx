import type { ODS_TEXT_COLOR_INTENT, ODS_TEXT_COLOR_HUE } from './constants/text-color';
import type { ODS_TEXT_LEVEL } from './constants/text-level';
import type { ODS_TEXT_SIZE } from './constants/text-size';
import type { OdsTextAttribute } from './interfaces/attributes';
import { odsGenerateColorVariable } from '@ovhcloud/ods-common-theming';
import { Component, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

/**
 * @slot (unnamed) - Text content
 */
@Component({
  tag: 'osds-text',
  styleUrl: 'osds-text.scss',
  shadow: true,
})
export class OsdsText implements OdsTextAttribute {
  /** @see OdsTextAttribute.breakSpaces */
  @Prop({ reflect: true }) public breakSpaces? = DEFAULT_ATTRIBUTE.breakSpaces;

  /** @see OdsTextAttribute.color */
  @Prop({ reflect: true }) public color?: ODS_TEXT_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsTextAttribute.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsTextAttribute.size */
  @Prop({ reflect: true }) public size?: ODS_TEXT_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsTextAttribute.level */
  @Prop({ reflect: true }) public level?: ODS_TEXT_LEVEL = DEFAULT_ATTRIBUTE.level;

  /** @see OdsTextAttribute.hue */
  @Prop({ reflect: true }) public hue?: ODS_TEXT_COLOR_HUE = DEFAULT_ATTRIBUTE.hue;

  render() {
    return (
      <Host style={{ '--osds-text-color-specific-hue': this.color && this.hue ? `var(${odsGenerateColorVariable(this.color, this.hue)})` : '' }}>
        <slot></slot>
      </Host>
    );
  }
}

import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Host, Prop, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { ODS_DIVIDER_SIZE } from './constants/divider-size';
import type { OdsDividerAttribute } from './interfaces/attributes';

@Component({
  tag: 'osds-divider',
  styleUrl: 'osds-divider.scss',
  shadow: true,
})
export class OsdsDivider implements OdsDividerAttribute {
  @Element() el!: HTMLElement;

  /** @see OdsDividerAttributes.separator */
  @Prop({ reflect: true }) public separator? = DEFAULT_ATTRIBUTE.separator;

  /** @see OdsDividerAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsDividerAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_DIVIDER_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsDividerAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  render() {
    const { separator } = this;

    return (
      <Host>
        { separator ? <hr></hr> : <span></span> }
      </Host>
    );
  }
}

import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../../../icon/src';
import { ODS_BADGE_COLOR, type OdsBadgeColor } from '../../constants/badge-color';
import { ODS_BADGE_ICON_ALIGNMENT, type OdsBadgeIconAlignment } from '../../constants/badge-icon-alignment';
import { ODS_BADGE_SIZE, type OdsBadgeSize } from '../../constants/badge-size';

@Component({
  shadow: true,
  styleUrl: 'ods-badge.scss',
  tag: 'ods-badge',
})
export class OdsBadge {
  @Prop({ reflect: true }) public color: OdsBadgeColor = ODS_BADGE_COLOR.information;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public iconAlignment?: OdsBadgeIconAlignment = ODS_BADGE_ICON_ALIGNMENT.left;
  @Prop({ reflect: true }) public label?: string;
  @Prop({ reflect: true }) public size: OdsBadgeSize = ODS_BADGE_SIZE.md;

  render(): FunctionalComponent {
    return (
      <Host class="ods-badge">
        <div
          class={{
            'ods-badge__badge': true,
            [`ods-badge__badge--${this.color}`]: true,
            [`ods-badge__badge--${this.size}`]: true,
            [`ods-badge__badge--icon-${this.iconAlignment}`]: true,
          }}
          part="badge">
          {
            !!this.icon &&
            <ods-icon
              class="ods-badge__badge__icon"
              name={ this.icon }>
            </ods-icon>
          }

          {
            this.label && this.label.length > 0 &&
            <span class="ods-badge__badge__label">
              { this.label }
            </span>
          }
        </div>
      </Host>
    );
  }
}

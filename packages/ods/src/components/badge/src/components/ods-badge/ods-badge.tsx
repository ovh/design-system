import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../../../icon/src';
import { ODS_BADGE_COLOR, type OdsBadgeColor } from '../../constants/badge-color';
import { ODS_BADGE_SHAPE, type OdsBadgeShape } from '../../constants/badge-shape';
import { ODS_BADGE_SIZE, type OdsBadgeSize } from '../../constants/badge-size';

@Component({
  shadow: true,
  styleUrl: 'ods-badge.scss',
  tag: 'ods-badge',
})
export class OdsBadge {
  /** @docType OdsBadgeColor */
  @Prop({ reflect: true }) public color: OdsBadgeColor = ODS_BADGE_COLOR.information;
  /** @docType OdsIconName */
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public label!: string;
  /** @docType OdsBadgeShape */
  @Prop({ reflect: true }) public shape: OdsBadgeShape = ODS_BADGE_SHAPE.round;
  /** @docType OdsBadgeSize */
  @Prop({ reflect: true }) public size: OdsBadgeSize = ODS_BADGE_SIZE.md;

  render(): FunctionalComponent {
    return (
      <Host class="ods-badge">
        <div
          class={{
            'ods-badge__badge': true,
            [ `ods-badge__badge--${this.color}` ]: true,
            [ `ods-badge__badge--${this.shape}` ]: true,
            [ `ods-badge__badge--${this.size}` ]: true,
          }}
          part="badge">
          {
            !!this.icon &&
            <ods-icon
              class="ods-badge__badge__icon"
              name={ this.icon }>
            </ods-icon>
          }

          <span class="ods-badge__badge__label">
            { this.label }
          </span>
        </div>
      </Host>
    );
  }
}

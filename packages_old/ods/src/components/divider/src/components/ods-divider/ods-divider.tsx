import type { OdsDividerColor } from '../../constants/divider-color';
import type { OdsDividerSpacing } from '../../constants/divider-spacing';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import { ODS_DIVIDER_COLOR } from '../../constants/divider-color';
import { ODS_DIVIDER_SPACING } from '../../constants/divider-spacing';

@Component({
  shadow: true,
  styleUrl: 'ods-divider.scss',
  tag: 'ods-divider',
})
export class OdsDivider {
  @Prop({ reflect: true }) public color: OdsDividerColor = ODS_DIVIDER_COLOR.light;
  @Prop({ reflect: true }) public spacing: OdsDividerSpacing = ODS_DIVIDER_SPACING._2;

  render(): FunctionalComponent {
    return (
      <Host>
        <hr class={ `ods-divider__divider ods-divider__divider--${this.color} ods-divider__divider--${this.spacing}` }
          part="divider" />
      </Host>
    );
  }
}

import { Component, type FunctionalComponent, Host, Listen, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../../../icon/src';
import { ODS_LINK_COLOR, type OdsLinkColor } from '../../constant/link-color';
import { ODS_LINK_ICON_ALIGNMENT, type OdsLinkIconAlignment } from '../../constant/link-icon-alignment';

@Component({
  shadow: true,
  styleUrl: 'ods-link.scss',
  tag: 'ods-link',
})
export class OdsLink {
  @Prop({ reflect: true }) public color: OdsLinkColor = ODS_LINK_COLOR.primary;
  @Prop({ reflect: true }) public download?: HTMLAnchorElement['download'];
  @Prop({ reflect: true }) public href!: string;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public iconAlignment?: OdsLinkIconAlignment = ODS_LINK_ICON_ALIGNMENT.right;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public label?: string;
  @Prop({ reflect: true }) public referrerpolicy?: ReferrerPolicy;
  @Prop({ reflect: true }) public rel?: HTMLAnchorElement['rel'];
  @Prop({ reflect: true }) public target?: HTMLAnchorElement['target'];

  @Listen('click')
  onClick(event: MouseEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-link">
        <a class={{
          'ods-link__link': true,
          'ods-link__link--disabled': this.isDisabled ?? false,
          [`ods-link__link--${this.color}`]: true,
          [`ods-link__link--icon-${this.iconAlignment}`]: true,
        }}
        download={ this.download }
        href={ this.href }
        part="link"
        referrerPolicy={ this.referrerpolicy }
        rel={ this.rel }
        tabindex={ this.isDisabled ? -1 : 0 }
        target={ this.target }>
          {
            !!this.label &&
            <span part="label" class="ods-link__link__label">
              { this.label }
            </span>
          }

          {
            !!this.icon &&
            <div class="ods-link__link__icon">
              {/* If there is no label, we display a zero-width space to simulate the correct baseline */}
              {
                !this.label &&
                <span>&#8203;</span>
              }

              <ods-icon name={ this.icon }>
              </ods-icon>
            </div>
          }
        </a>
      </Host>
    );
  }
}

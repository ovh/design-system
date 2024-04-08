import { Component, type FunctionalComponent, Host, Listen, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../../../icon/src/constants/icon-name';
import { ODS_LINK_COLOR, type OdsLinkColor } from '../../constant/link-color';

@Component({
  shadow: true,
  styleUrl: 'ods-link.scss',
  tag: 'ods-link',
})
export class OdsLink {
  @Prop({ reflect: true }) public color: OdsLinkColor = ODS_LINK_COLOR.primary;
  @Prop({ reflect: true }) public disabled: boolean = false;
  @Prop({ reflect: true }) public download?: HTMLAnchorElement['download'];
  @Prop({ reflect: true }) public href!: string;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public label?: string;
  @Prop({ reflect: true }) public referrerpolicy?: ReferrerPolicy;
  @Prop({ reflect: true }) public rel?: HTMLAnchorElement['rel'];
  @Prop({ reflect: true }) public target?: HTMLAnchorElement['target'];

  @Listen('click')
  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-link">
        <a class={{
          'ods-link__link': true,
          'ods-link__link--disabled': this.disabled ?? false,
          [`ods-link__link--${this.color}`]: true,
        }}
        download={ this.download }
        href={ this.href }
        part="link"
        referrerPolicy={ this.referrerpolicy }
        rel={ this.rel }
        tabindex={ this.disabled ? -1 : 0 }
        target={ this.target }>
          <span class="ods-link__link__text">
            { this.label }
          </span>

          {
            !!this.icon &&
            <ods-icon
              class="ods-link__link__icon"
              name={ this.icon }>
            </ods-icon>
          }
        </a>
      </Host>
    );
  }
}

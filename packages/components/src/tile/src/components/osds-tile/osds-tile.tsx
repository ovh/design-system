import type { OdsTileAttribute } from './interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TILE_SIZE } from './constants/tile-size';
import { ODS_TILE_VARIANT } from './constants/tile-variant';
import { OdsTileController } from './core/controller';

@Component({
  tag: 'osds-tile',
  styleUrl: 'osds-tile.scss',
  shadow: true,
})
export class OsdsTile implements OdsTileAttribute {
  controller: OdsTileController = new OdsTileController(this);

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public checked?: boolean = DEFAULT_ATTRIBUTE.checked;
  @Prop({ reflect: true }) public checking?: boolean = DEFAULT_ATTRIBUTE.checking;
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true, mutable: true }) public hasFocus?: boolean = DEFAULT_ATTRIBUTE.hasFocus;
  @Prop({ reflect: true }) public hoverable?: boolean = DEFAULT_ATTRIBUTE.hoverable;
  @Prop({ reflect: true, mutable: true }) public inline? = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) public loading?: boolean = DEFAULT_ATTRIBUTE.loading;
  @Prop({ reflect: true }) public rounded?: boolean = DEFAULT_ATTRIBUTE.rounded;
  @Prop({ reflect: true }) public size?: ODS_TILE_SIZE = DEFAULT_ATTRIBUTE.size;
  @Prop({ reflect: true }) public variant?: ODS_TILE_VARIANT = DEFAULT_ATTRIBUTE.variant;

  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    return (
      <Host {...{
        onClick: () => this.controller.handleClick(),
      }}
        class={{
          'osds-tile' : true,
          'osds-tile--checking' : this.checking || false,
          'osds-tile--disabled' : this.disabled || false,
          'osds-tile--hoverable' : this.hoverable || false,
          'osds-tile--inline' : this.inline || false,
          'osds-tile--rounded' : this.rounded || false
        }}
      >
        <slot name={'start'}></slot>
        <span>
          <slot></slot>
        </span>
        <slot name={'end'}></slot>
      </Host>
    );
  }
}

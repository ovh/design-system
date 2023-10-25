import type { OdsTileAttribute } from './interfaces/attributes';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Host, Prop, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TILE_SIZE } from './constants/tile-size';
import { ODS_TILE_VARIANT } from './constants/tile-variant';
import { OdsTileController } from './core/controller';

/**
 * @slot start - Fixed start button content
 * @slot (unnamed) - Tile content
 * @slot end - Fixed end button content
 */
@Component({
  tag: 'osds-tile',
  styleUrl: 'osds-tile.scss',
  shadow: true,
})
export class OsdsTile implements OdsTileAttribute {
  controller: OdsTileController = new OdsTileController(this);

  @Element() el!: HTMLElement;

  /** @see OdsTileAttributes.checked */
  @Prop({ reflect: true }) public checked?: boolean = DEFAULT_ATTRIBUTE.checked;

  /** @see OdsTileAttributes.checking */
  @Prop({ reflect: true }) public checking?: boolean = DEFAULT_ATTRIBUTE.checking;

  /** @see OdsTileAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsTileAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTileAttributes.hasFocus */
  @Prop({ reflect: true, mutable: true }) public hasFocus?: boolean = DEFAULT_ATTRIBUTE.hasFocus;

  /** @see OdsTileAttributes.hoverable */
  @Prop({ reflect: true }) public hoverable?: boolean = DEFAULT_ATTRIBUTE.hoverable;

  /** @see OdsTileAttributes.inline */
  @Prop({ reflect: true, mutable: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsTileAttributes.loading */
  @Prop({ reflect: true }) public loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  /** @see OdsTileAttributes.rounded */
  @Prop({ reflect: true }) public rounded?: boolean = DEFAULT_ATTRIBUTE.rounded;

  /** @see OdsTileAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_TILE_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsTileAttributes.variant */
  @Prop({ reflect: true }) public variant?: ODS_TILE_VARIANT = DEFAULT_ATTRIBUTE.variant;

  /** @see OdsTileBehavior.beforeRender */
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
      }}>
        <slot name={'start'}></slot>
        <span class={'tile__centered-text'}>
          <slot></slot>
        </span>
        <slot name={'end'}></slot>
      </Host>
    );
  }
}
